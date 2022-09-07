String.prototype.toJadenCase = function () {
    //capitalize each word in the sentence
    //convert string to array, cap, then convert back to string
    return this.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
  };
