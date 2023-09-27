const getTimesTable = (tables) => {
  let res = []
  for (let i = 0; i < tables; i++) {
    res[i] = []
    for (let j = 0; j < tables; j++) {
      res[i][j] = ((i + 1) * (j + 1))
    }
  }
  return res
}

console.log(getTimesTable(12))