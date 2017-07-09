// ****************
// Imports
// ****************
// import functions
const randomNumber = require("./randomNumber")

// ****************
// Function
// ****************
const getRandomEntry = (data) =>
  data[randomNumber(0, data.length - 1)]

// export function
module.exports = getRandomEntry