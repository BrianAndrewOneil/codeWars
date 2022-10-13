//Given a URL as a string, parse out just the domain name and return it as a string
function domainName(url){
  let ans=url.replace('https://','').replace('http://','').replace('www.','')
  ans=ans.split('.')
  return ans[0]
}