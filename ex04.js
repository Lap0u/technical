const findBuzzParams = (str) => {
  const splitted = str.split(' ')
  let n = -1
  let p = -1
  for (let i = 0; i < str.length; i++) {
    if (splitted[i] === 'Buzz' && n === -1)
      n = i + 1
    else if (splitted[i] === 'Buzz' && (i + 1) % n !== 0) {
      p = i + 1
      return [n, p]
    }
  }
  return [n, p]
}

console.log(findBuzzParams("1 2 3 Buzz Buzz"))
console.log(findBuzzParams("1 2 3 Buzz 5 6 7 Buzz Buzz"))
console.log(findBuzzParams("1 Buzz 3 Buzz 5 6 7 Buzz Buzz"))