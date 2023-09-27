const rechercheDichotomique = (array, toFind, indice = 0) => {
  let start = Math.ceil(array.length / 2)
  while (start !== indice && start < array.length) {
    if (array[start] === toFind)
      return start
    let tempStart = start

    if (array[start] > toFind)
      start = start - Math.ceil((Math.abs(indice - start)) / 2)
    else
      start = start + Math.ceil((Math.abs(indice - start)) / 2)
    indice = tempStart
  }
  return -1

}

const tableauTrié = [1, 3, 5, 7, 9, 11, 13, 15]
const élémentRecherché = 15
const res = rechercheDichotomique(tableauTrié, élémentRecherché)
if (res !== -1) { console.log(`L'élément ${élémentRecherché} a été trouvé à l'indice ${res}.`) }
else { console.log(`L'élément ${élémentRecherché} n'a pas été trouvé dans le tableau.`) }
