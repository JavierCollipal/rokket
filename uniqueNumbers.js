
const rokket = (a , b) => {
  const aResult = a.filter(x => !b.includes(x))
  const bResult = b.filter(x => !a.includes(x))

  return [...aResult,...bResult]
}

console.log(rokket([1,2,5],[2,1,6]))
console.log(rokket([1,2,3],[4,5,6]))
