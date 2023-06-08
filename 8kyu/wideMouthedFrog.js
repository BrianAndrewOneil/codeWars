//Given an animal, if this one is an alligator (case-insensitive) return small otherwise return wide.

const mouthSize = animal => animal.toLowerCase()==='alligator' ? 'small' : 'wide'

console.log(mouthSize("toucan"),"wide")
console.log(mouthSize("ant bear"),"wide")
console.log(mouthSize("alligator"),"small")