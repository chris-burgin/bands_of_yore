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
    data: "[band] [band] [venue]",
    build: arr => `Don't miss ${arr[0]} with ${arr[1]} today at ${arr[2]}!`
  }
]

module.exports = tweets