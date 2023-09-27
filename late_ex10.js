let contact = new Map()

const addContact = (username, user) => {
  if (contact.has(username)) {
    console.log(`Contact ${username} already exists`)
    return
  }
  contact.set(username, user)
}

const getContact = (username) => {
  const user = contact.get(username)
  if (user === undefined) {
    console.log(`Contact ${username} doesn't exist in contacts`)
    return
  }
  console.log(`User ${username} can be called at ${user.phone} and lives at ${user.address}`)
}

const updateContact = (username, toUpdate) => {
  const user = contact.get(username)
  if (user === undefined) {
    console.log(`Contact ${username} doesn't exist in contacts`)
    return
  }
  contact.set(username, { ...user, ...toUpdate })
}

const deleteContact = (username) => {
  const user = contact.get(username)
  if (user === undefined) {
    console.log(`Contact ${username} doesn't exist in contacts`)
    return
  }
  contact.delete(username)
}

addContact("Alice", { phone: "123-456-7890", address: "123 Main St" })
updateContact("Alice", { phone: "987-654-3210" })
getContact("Alice")
deleteContact("Alice")
getContact("Alice")
addContact("Georges", { phone: "123-456-7890", address: "123 Main St" })
addContact("Georges", { phone: "123-456-7890", address: "123 Main St" })
updateContact("Georges", { address: "987-654-3210" })
getContact("Georges")
console.log("unknown tests")
deleteContact("Unknown")
getContact("Unknown")
updateContact("Unknown", { phone: "123-2321-123" })

// Ajouter un contact addContact("Alice", { phone: "123-456-7890", address: "123 Main St" }); // Mettre à jour un contact updateContact("Alice", { phone: "987-654-3210" }); // Supprimer un contact deleteContact("Bob"); // Afficher les informations d'un contact getContact("Alice");