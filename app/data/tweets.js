// ****************
// Imports
// ****************
// import functions
const setWeight = require("../functions/setWeight")

// ****************
// Data
// ****************
const tweets = [
  ...setWeight(5, {
    data: "[band]",
    build: arr => `${arr[0]}`,
  }),
  {
    data: "[band] [venue]",
    build: arr => `Catch ${arr[0]} playing at ${arr[1]}!`
  },
  {
    data: "[days] [band] [venue]",
    build: arr => `This ${arr[0]}, come and see ${arr[1]} dropping their new sound at ${arr[2]}!`
  },
  {
    data: "[band] [band] [venue]",
    build: arr => `Don't miss ${arr[0]} with ${arr[1]} today at ${arr[2]}!`,
  },
  {
    data: "[band] [venue]",
    build: arr => `Get your horse and come see ${arr[0]} at ${arr[1]}.`,
  },
  {
    data: "[band]",
    build: arr => `Don't miss ${arr[0]} tomorrow.`,
  },
  {
    data: "[band] [adjective]",
    build: arr => `${arr[0]} are completely ${arr[1]}.`,
  },
  {
    data: "[band] [venue]",
    build: arr =>
      `You don't want to miss ${arr[0]} playing at ${arr[1]} tonight!`,
  },
  {
    data: "[band] [venue]",
    build: arr => `Music by ${arr[0]} tonight at ${arr[1]}!`,
  },
  {
    data: "[adjective] [band]",
    build: arr => `Things are about to get ${arr[0]} with ${arr[1]}.`,
  },
  {
    data: "[band] [band]",
    build: arr =>
      `${arr[0]} and ${arr[1]} take the stage for the first time together!`,
  },
  {
    data: "[adjective] [band] [venue]",
    build: arr => `${arr[0]} ${arr[1]} hangout at ${arr[2]} !`,
  },
  {
    data: "[band]",
    build: arr => `${arr[0]}'s new song is released!`,
  },
  {
    data: "[band] [venue]",
    build: arr => `${arr[0]} is going to bring down the house tonight at ${arr[1]}!`,
  },
]

module.exports = tweets
