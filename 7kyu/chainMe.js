function chain(input, fs) {
    for(let i=0;i<fs.length; i++){
    input=fs[i](input)
    }
    return input
  }
