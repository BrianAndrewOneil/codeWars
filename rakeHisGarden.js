//Rake out any items that are not a rock or gravel and replace them with gravel.
let rakeGarden = garden => garden.split(' ').map(e=>e=="rock"?e="rock":e="gravel").join(' ')