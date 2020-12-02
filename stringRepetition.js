const rokket = (word,repeatTimes) => {
  let finalWord = '';
  for(let i = 0; i < repeatTimes; i++) finalWord = finalWord + word;
  return finalWord;
}

console.log(rokket('node',5))
console.log(rokket('abc',2))
