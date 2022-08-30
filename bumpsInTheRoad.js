//Given a string showing either flat road (_) or bumps (n). 
//You are able to reach home safely by encountering 15 bumps or less.
let bump=x=>x.split('').filter(char=>char==='n').length<=15?"Woohoo!":"Car Dead"