// ****************
// Imports
// ****************
// import data
const bands = require("../data/bands")
const nouns = require("../data/nouns")
const adjectives = require("../data/adjectives")

// import functions
const getRandomEntry = require("./getRandomEntry")

// ****************
// Function
// ****************
// build band function
const buildBand = () => {
  // get new band
  const band = getRandomEntry(bands)

  // build band inserts
  const inserts = 
    band.data
      .split(" ")
      .map(type =>
        dataSwitch[type]
          ? getRandomEntry(dataSwitch[type]).value
          : type)

  // return the band
  // note: to re-use functions and prevent lots of specific code
  // the return of this funciton must be wrapped in [{}]. Annoying,
  // but slightly better this way. (for now)
  return [{value: band.build(inserts)}]
}

// export band
module.exports = buildBand

// Data Switch
// TODO: Abstract Data Switch
const dataSwitch = {
  "[adjective]": adjectives,
  "[noun]": nouns
}