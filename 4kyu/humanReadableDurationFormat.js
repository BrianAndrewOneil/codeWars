//Format a duration, given as a number of seconds, in a human-friendly way (i.e., years, days, hours, minutes, seconds)
function formatDuration (input) {
  if (input===0) return 'now'  
  let y=0, d=0, h=0, m=0, s=0
    
    while((input-31536000)>=0){
      input-=31536000
      y+=1
    }
    while((input-86400)>=0){
      input-=86400
      d+=1
    }
    while((input-3600)>=0){
      input-=3600
      h+=1
    }
    while((input-60)>=0){
      input-=60
      m+=1
    }
    s=input

    let ans=[]
    if(y===1) ans.push('1 year')
    if(y>1) ans.push(`${y} years`)
    if(d===1) ans.push('1 day')
    if(d>1) ans.push(`${d} days`)
    if(h===1) ans.push('1 hour')
    if(h>1) ans.push(`${h} hours`)
    if(m===1) ans.push('1 minute')
    if(m>1) ans.push(`${m} minutes`)
    if(s===1) ans.push('1 second')
    if(s>1) ans.push(`${s} seconds`)
    if (ans.length>1) ans=ans.map((e,i,a)=>i<(a.length-2)?e=e+', ':i==(a.length-2)?e=e+" and ":e)
    return ans.join('')
  }

  console.log(formatDuration(9985440), "115 days, 13 hours and 44 minutes")
  console.log(formatDuration(253374061), "8 years, 12 days, 13 hours, 41 minutes and 1 second")
  console.log(formatDuration(1161480), "13 days, 10 hours and 38 minutes")
  console.log(formatDuration(62), "1 minute and 2 seconds")
  console.log(formatDuration(2), "2 seconds")

  //https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

  // function formatDuration (input) {
  //   if (input===0) return 'now'  
  //   let y=0, d=0, h=0, m=0, s=0
      
  //     while((input-31557600)>=0){
  //       input-=31557600
  //       y+=1
  //     }
  //     while((input-86400)>=0){
  //       input-=86400
  //       d+=1
  //     }
  //     while((input-3600)>=0){
  //       input-=3600
  //       h+=1
  //     }
  //     while((input-60)>=0){
  //       input-=60
  //       m+=1
  //     }
  //     s=input
  
  //     let ans=[]
  //     if(y===1) ans.push('1 year, ')
  //     if(y>1) ans.push(`${y} years, `)
  //     if(d===1) ans.push('1 day, ')
  //     if(d>1) ans.push(`${d} days, `)
  //     if(h===1) ans.push('1 hour, ')
  //     if(h>1) ans.push(`${h} hours, `)
  //     if(m===1) ans.push('1 minute, ')
  //     if(m>1) ans.push(`${m} minutes, `)
  //     if(s===1) ans.push('1 second')
  //     if(s>1) ans.push(`${s} seconds`)
  //     if(ans.length==1&&s===0) ans[0]=ans[0].split('').slice(0,-2).join('')
  //     if(ans.length>=2) ans[ans.length-2]=ans[ans.length-2].split('').slice(0,-2).join('')+' and '
  //     return ans.join('')
  //   }