//Given a URL as a string, parse out just the domain name and return it as a string
function domainName(url){
  let start=0
  if (url.includes('//')) {
    start=url.indexOf('//')+2
    url=url.slice(start)
  }
  if (url.includes('www.')) {
    start=url.indexOf('www.')+4
    url=url.slice(start)
  }
  let end=url.indexOf('.')
  return url.slice(0,-(url.length-end))
}