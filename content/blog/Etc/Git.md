---
title: 간단한 Git 사용법
date: 2020-02-02
category: Etc
draft: false
---

# Git

Git은 분산버전 관리시스템(DVCS)의 일종이다.

소스코드의 이력을 남기고 관리할 수 있다.



# 준비사항

윈도에서 git을 쓰기 위해 [git bash](https://gitforwindows.org/)를 설치한다.

컴퓨터에 처음 설치하는 경우 커밋을 작성하는 사람(author)를 global로 설정을 해야한다.

``` bash
$ git config --global user.name edutak
$ git congif --global user.email tghyyhju@gmaul.com
```



## 로컬 저장소 활용하기

### 1. 저장소 생성

```bash
$ git init
Initialized empty Git repository in C:/Users/HPE/Desktop/TIL/.git/
(master) $
```

* git 저장소를 생성하면, 해당 디렉토리에 `.git` 폴더가 생성된다.
* `(master)`는 현재 작업중인 브랜치가 master라는 의미를 가지고 있다.



### 2. `add`

* working directory(작업공간)에서 staging area로 해당 파일을 이동시키기 위해서는 아래의 명려어를 사용한다.

* ```bash
  $ git add markdown.md	 #특정파일
  $ git add images/	#특정 폴더
  $ git add .	#현재 디렉토리 전부
  ```

  * `add` 전 상태

    ```bash
    $ git status
    On branch master
    
    No commits yet
    # 트래킹이 되지 않고 있는 파일들
    # => commit 이력에 한번도 저장되지 않은 파일들, 즉 새로 생성된 파일
    Untracked files:
    # 커밋이 될 것들에 포함시키기 위해서는 add
    # => staging area에 담으려면 add
      (use "git add <file>..." to include in what will be committed)
            Git.md
            MarkDown.md
            images/
    
    nothing added to commit but untracked files present (use "git add" to track)
    
    ```

  * `add`후 상태

    ```bash
    $ git add markdown.md
    
    $ git status
    On branch master
    
    No commits yet
    # 커밋 될 변경사항들
    # => staging area에 있는 파일들
    Changes to be committed:
      (use "git rm --cached <file>..." to unstage)
      # 이 명령어 입력하면 SA에서 WD로 내릴 수 있다(심화내용)
            new file:   markdown.md
    #working directory에 있는 파일들
    Untracked files:
      (use "git add <file>..." to include in what will be committed)
            Git.md
            images/
    ```

### 3. commmit

* 이력을 남기기 위해서는 아래의 명령어를 활용한다.

  ```bash
  $ git commit -m "커밋메세지"
  [master (root-commit) eea1582] markdown 활 용 법 추가
   1 file changed, 140 insertions(+)
   create mode 100644 markdown.md
  ```

* 커밋메세지는 해당 이력을 나타낼 수 있도록 작성하는 것이 중요하고, 항상 일관적으로 작성하자.

* 매우 유용한 사이트들

  * https://meetup.toast.com/posts/106
  * https://blog.ull.im/engineering/2019/03/10/logs-on-git.html

* 커밋 내역은 아래의 명령어로 확인 가능하다.

  ```bash
  $ git log # log보기
  $ git log --oneling # 한줄로 출력
  $ git log -1 # 원하는 양 만큼 출력
  ```

  

## 원격저장소(remote repository) 활용하기

> 원격저장소를 제공하는 서비스는 gitlab, github, bitbucket 등 다양하나 github을 기준으로 설명한다.

### 1. 원격저장소 설정하기

```bash
$ git remote add origin github_url
```

* 원격저장소(`remote`)를 `origin`이름으로 `github_url`을 추가(`add`)한다.

* 설정된 원격 저장소 목록을 확인하기 위해서는 아래의 명령어를 활용한다.

  ```bash
  $ git remote -v
  origin  https://github.com/tghyyhjuujki/TIL.git (fetch)
  origin  https://github.com/tghyyhjuujki/TIL.git (push)
  ```

* 설정된 원격 저장소를 삭제하기 위해서는 아래의 명령어를 활용한다.

  ```bash
  $ git remote rm origin
  ```



### 2. push

```bash
$ git push origin master
# git push -u origin master 하면 업스트림하여 git push만 해도 된다
```

* `origin`으로 설정된 url에 `master`브랜치로 `push`한다.



## push가 안 되는 상황 해결방법

* 원격 저장소 이력과 로컬 저장소 이력이 다른 경우 아래와 같이 push가 되지 않는다

  ```bash
  $ git push origin master
  To https://github.com/tghyyhjuujki/git_tutorial.git
   ! [rejected]        master -> master (fetch first)
   # 원격 저장소 이력과 로컬 저장소 이력이 다름
  error: failed to push some refs to 'https://github.com/tghyyhjuujki/git_tutorial.git'
  hint: Updates were rejected because the remote contains work that you do
  hint: not have locally. This is usually caused by another repository pushing
  # 원격 저장소 변경 사항들을 먼저 통합(integrate)하고 싶을텐데..??
  # 다시 push 하기 전에 pull을 해봐
  hint: to the same ref. You may want to first integrate the remote changes
  hint: (e.g., 'git pull ...') before pushing again.
  hint: See the 'Note about fast-forwards' in 'git push --help' for details.
  ```

* 아래와 같이 해결한다

  ```bash
  $ git pull origin master
  ```

  * pull을 하게 되면, commit 메세지를 작성할 수 있는 vim이 뜨게 된다

  * `esc`, `:wq`를 순서대로 입력하면 커밋 메세지를 저장할 수 있다.

    ```bash
    $ git log --oneline
    f9afc2a (HEAD -> master) Merge branch 'master' of https://github.com/tghyyhjuujki/git_tutorial
    ```

  * 그리고 다시 `push`한다.

    ```bash
    $ git push origin master
    ```

* `pull`을 하는 과정에서 각각 이력이 동일한 파일을 수정했다면, 충돌이 발생한다!

* 충돌이 발생하는 경우 직접 해당 파일을 열어서 수정하고, commit을 한다.

  ```bash
  $ git add .
  $ git commit
  ```

* commit 메세지는 자동으로 입력이 되어있고, 종료 한 이후에 다시 `push`한다.



## branch

```
$ git checkout 'test'
```

$ git branch feature/signup >>브랜치 생성

$ git branch >> 있는지 확인

$ git checkout feature/signup >> 스위칭

자세한 건 PPT 받아서 해보자



## fork

다른사람의 repo에 권한이 없을 때 내 저장소로 가져오는 동작(fork를 가져와 pull request를 뜬다고 함)

가져와서 수정 후 pull request하면 그 사람에게 내 요청사항이 전달된다.

그 사람이 수락하면 나의  변경사항이 그 사람의 저장소에 적용된다.



## blog

github pages로 블로깅이 가능하지만, 추천하는 두가지가 있다

정적 템플릿 생성기

* 마크다운 기반의 블로깅 가능
* 마크다운 > html/css/js
  * gatsby(node) : 요즘 핫한 기술은 다 갖고 있다(react, graphql)(추천)
  * jekyll(ruby) : 자료가 오래됨



https://octoverse.github.com/ 깃허브 통계 사이트



## gitignore

 

git 저장소로 설정된 모든 파일들은 변경사항이 추적된다.

만일, 내가 git으로 관리하고 싶지 않은 파일이 있다면, `.gitignore`파일을 생성하고, 다음과 같이 설정한다.

```bash
*.xlsx # 특정 확장자인 파일
a.txt # 특정 파일
images/ # 특정 폴더
!upload.xlsx # 특정 파일 제외
```

직접 추가하는 내용 뿐만 아니라 일반적인 개발 환경에서 반드시 설정하는 파일/폴더들이 있다.

ex) IDE 설정파일, cache 파일 등..

처음에는 직접 설정하기 힘드니 [gitignore.io](https://gitignore.io)에서 만들어진 내용을 가져온다.

* `windows` , `node`, `react`, `vsCode`