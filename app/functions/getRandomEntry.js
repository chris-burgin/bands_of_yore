// ****************
// Imports
// ****************
// import functions
const randomNumber = require("./randomNumber")

// ****************
// getRandomEntry()
// use: gets a random entry.
// returns: random entry from list.
// ----------------
// data: required - string - template literal list of data to pull from.
// ****************
const getRandomEntry = (data) =>
  data[randomNumber(0, data.length - 1)]

// export function
module.exports = getRandomEntry
