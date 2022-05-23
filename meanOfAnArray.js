let getAverage = (marks) => Math.floor (marks.reduce ((acc,c) => acc+c) / marks.length)
  //TODO : calculate the downward rounded average of the marks array