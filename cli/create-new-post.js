const path = require('path')
const fs = require('fs-extra')
const dateFns = require('date-fns')
const _ = require('lodash')
const rr = require('recursive-readdir')
const matter = require('gray-matter')
const inquirer = require('inquirer')
const log = require('signale')
const cwd = process.cwd()

const CONTENTS_DIR = '/content/blog'
const TARGET_DIR = `${cwd}${CONTENTS_DIR}`
const IGNORE_DIR = 'images'
const UTF_8 = 'utf8'
const DATE_FORMAT = 'YYYY-MM-DD HH:MM:SS'

const ignoreFunc = (file, stats) =>
  stats.isDirectory() && path.basename(file) == IGNORE_DIR

const getCategories = async () => {
  const markdownFiles = await rr(TARGET_DIR, [ignoreFunc])

  return _.uniq(
    markdownFiles
      .map(file => fs.readFileSync(file, UTF_8))
      .map(str => matter(str).data.category)
      .filter(val => !!val)
      .map(str => str.trim().toLowerCase())
  )
}

const getFileName = title =>
  title
    .split(' ')
    .join('-')
    .toLowerCase()

const refineContents = rawContents =>
  matter
    .stringify('', rawContents)
    .split("'")
    .join('')

const fetchCategory = async () => {
  let category
  const customCategoryOption = '[[ CREATE NEW CATEGORY ]]'
  const categories = await getCategories()
  const categoryChoices = [
    ...categories,
    new inquirer.Separator(),
    customCategoryOption,
  ]
  const { selectedCategory } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedCategory',
      message: 'Select a category',
      choices: categoryChoices,
    },
  ])

  if (selectedCategory === customCategoryOption) {
    const { customizedCategory } = await inquirer.prompt([
      {
        type: 'input',
        name: 'customizedCategory',
        message: 'Enter the customized category',
        validate: val => {
          if (val.includes("'")) {
            return 'Cannot use single quote'
          }

          if (categories.includes(val)) {
            return `Already exist category name:: ${val}`
          }

          return true
        },
      },
    ])
    category = customizedCategory
  } else {
    category = selectedCategory
  }

  if (!category) {
    throw Error('Unknown Error: Cannot find category!')
  }

  return category
}

const fetchTitle = async category => {
  const { title } = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title',
      default: () => 'New post title',
      validate: async val => {
        if (val.includes("'")) {
          return 'Cannot use single quote'
        }

        const fileName = getFileName(val)
        const dest = `${TARGET_DIR}/${category}/${fileName}.md`
        const destFileExists = await fs.pathExists(dest)

        if (destFileExists) {
          return `Already exist file name:: ${fileName}.md`
        }

        return true
      },
    },
  ])

  return title
}

module.exports = (async function() {
  const date = dateFns.format(new Date(), DATE_FORMAT)

  log.info('Create new post:: ', date)
  log.start('Start to process!\n')

  const category = await fetchCategory()
  const destDir = `${TARGET_DIR}/${category}`
  const destDirExists = await fs.pathExists(destDir)

  if (!destDirExists) {
    await fs.ensureDir(destDir)
  }

  const title = await fetchTitle(category)
  const fileName = getFileName(title)
  const contents = refineContents({ title, date, category })

  fs.writeFile(`${destDir}/${fileName}.md`, contents, err => {
    if (err) {
      log.error('Unknown Error: Cannot write file!')
      return
    }
    console.log('')

    log.success('Success to create new post!')
    log.note(`/${category}/${fileName}.md\n${contents}`)
  })
})()
