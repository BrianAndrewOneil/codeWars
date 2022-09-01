//Returns a url with anything after the anchor (#) removed. 
let removeUrlAnchor=url=>url.includes('#')?url.slice(0,url.indexOf('#')):url