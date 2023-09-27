const sortItemsByPriceByCategory = (produits, category) => {
  return produits.filter((produit) => produit.categorie === category).sort((a, b) => a.prix - b.prix)
}

const getItemsMatchingCategory = (produits, category) => {
  let itemsMatchingCategory = []
  for (const produit of produits) {
    if (produit.categorie === category)
      itemsMatchingCategory.push(produit)
  }
  return itemsMatchingCategory
}

const sortArrayByPrice = (itemsMatchingCategory) => {
  let n = itemsMatchingCategory.length
  for (let i = 1; i < n; i++) {
    let current = itemsMatchingCategory[i].prix
    let j = i - 1
    while ((j > -1) && (current < itemsMatchingCategory[j].prix)) {
      itemsMatchingCategory[j + 1].prix = itemsMatchingCategory[j].prix
      j--
    }
    itemsMatchingCategory[j + 1].prix = current
  }
  return itemsMatchingCategory
}

const handmadeSortItemsByPriceByCategory = (produits, category) => {
  const itemsMatchingCategory = getItemsMatchingCategory(produits, category)
  return sortArrayByPrice(itemsMatchingCategory)
}
const produits = [{ nom: "Smartphone", prix: 599.99, categorie: "Électronique" },
{ nom: "Ordinateur portable3", prix: 2299.99, categorie: "Électronique" },
{ nom: "Ordinateur portable", prix: 899.99, categorie: "Électronique" },
{ nom: "Ordinateur portable1", prix: 1899.99, categorie: "Électronique" },
{ nom: "Ordinateur portable2", prix: 99.99, categorie: "Électronique" },
{ nom: "Livre", prix: 19.99, categorie: "Littérature" },
{ nom: "Chaussures de course", prix: 129.99, categorie: "Mode" },
{ nom: "Chaussures de course2", prix: 119.99, categorie: "Mode" },
{ nom: "Chaussures de course3", prix: 109.99, categorie: "Mode" },
{ nom: "Chaussures de course4", prix: 1219.99, categorie: "Mode" },
{ nom: "Chaussures de course5", prix: 9.99, categorie: "Mode" }]

console.log(sortItemsByPriceByCategory(produits, "Électronique"))
console.log(sortItemsByPriceByCategory(produits, "Mode"))
console.log(sortItemsByPriceByCategory(produits, "Inexistant"))
console.log("#############")
console.log("SELFMADE")
console.log(handmadeSortItemsByPriceByCategory(produits, "Électronique"))
console.log(handmadeSortItemsByPriceByCategory(produits, "Mode"))
console.log(handmadeSortItemsByPriceByCategory(produits, "Inexistant"))