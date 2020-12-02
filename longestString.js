const list = ['best','company','ever']

const rokket = (array) => array.sort((a,b) => b.length - a.length)[0]

console.log(rokket(list))
