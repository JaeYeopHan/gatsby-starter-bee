export const shareToFacebook = href => {
  window.FB.ui({
    method: 'share',
    mobile_iframe: true,
    href,
  })
}

export const shareToTwitter = (href, text) => {
  window.open(
    `https://twitter.com/share?url=${encodeURI(encodeURI(href))}&text=${text}`,
    'sharer',
    'toolbar=0,status=0,width=626,height=436'
  )
}
