// ****************
// Imports
// ****************
// import functions
const setWeight = require("../functions/setWeight")

// ****************
// Data
// ****************
const tweets = [
  ...setWeight(10, {
    data: "[band]",
    build: arr => `${arr[0]}`
  }),
  {
    data: "[band] [venue]",
    build: arr => `Catch ${arr[0]} playing at ${arr[1]}!`
  },
  {
    data: "[days] [band] [venue]",
    build: arr => `This ${arr[0]}, come and see ${arr[1]} dropping their new sound at ${arr[2]}!`
  }
]

module.exports = tweets