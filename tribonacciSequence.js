//Create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
function tribonacci(sig,n){
    if(sig.length>=n){
    return sig.slice(0,n)
    }
    while(sig.length<n) {
      sig.push( sig[sig.length-1]+sig[sig.length-2]+sig[sig.length-3] )
    }
    return sig
  }