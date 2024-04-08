// input is a string of three chars from the set 'D', 'F', 'I', 'K', output is a single char from this set
// When all three are native speakers of the same language, it also becomes their group's language.
// When two are native speakers of the same language, but the third person speaks a different language, all three will converse in the minority language.
// When native speakers of three different languages meet, they eschew these three languages and instead use the remaining of the four official languages.

function trilingualDemocracy(g, all=['D','F','I','K']) {
    if (g[0]===g[1] && g[0]===g[2]) return g[0]
    if (g[0]===g[1]) return g[2]
    if (g[0]===g[2]) return g[1]
    if (g[1]===g[2]) return g[0]
    else return all.filter(i=>!(g.split('').includes(i)))[0]
}


console.log(trilingualDemocracy("FFF"), "F")
console.log(trilingualDemocracy("IIK"), "K")
console.log(trilingualDemocracy("DFK"), "I")