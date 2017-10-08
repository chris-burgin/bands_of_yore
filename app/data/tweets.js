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
  },
  {
    data: "[band] [venue]",
    build: arr => `Get your horse and come to ${arr[0]} at ${arr[1]}.`
  },
  {
    data: "[band]",
    build: arr => `Don't blink on ${arr[0]} performance tomorrow.`
  },
  {
    data: "[band]",
    build: arr => `${arr[0]} shall go on stage again.`
  },
  {
    data: "[band] [adjective]",
    build: arr => `${arr[0]} are completely ${arr[1]}.`
  },
  {
    data: "[adjective] [band] [venue]",
    build: arr => `Music by the ${arr[0]} ${arr[1]} tonight at ${arr[2]}!`
  },
  {
    data: "[adjective] [band] [venue]",
    build: arr => `Things are about to get ${arr[0]} with ${arr[1]} later at ${arr[2]}.`
  },
  {
    data: "[band] [band]",
    build: arr => `${arr[0]} and ${arr[1]} take the stage for the first time together!`
  },
  {
    data: "[venue] [band]",
    build: arr => `Drink a beer at ${arr[0]} while listening good music of ${arr[1]}.`
  }  
]

module.exports = tweets
