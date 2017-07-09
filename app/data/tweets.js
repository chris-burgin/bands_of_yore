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
  }
]

module.exports = tweets