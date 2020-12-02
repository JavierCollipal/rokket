const contacts = [
  { firstName: 'Juanito', lastname: 'Rokket'},
  { firstName: 'James', lastname: 'Bond'},
  { firstName: 'Harry', lastname: 'Potter' }
]
const rokket = (targetList) => targetList.map(contact => contact.lastname)

console.log(rokket(contacts))
