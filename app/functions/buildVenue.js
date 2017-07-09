// ****************
// Imports
// ****************
// import data
const venues = require("../data/venues")
const nouns = require("../data/nouns")
const adjectives = require("../data/adjectives")

// import functions
const getRandomEntry = require("./getRandomEntry")

// ****************
// Function
// ****************
// build venue function
const buildVenue = () => {
  // get new venue
  const venue = getRandomEntry(venues)

  // build venue inserts
  const inserts = 
    venue.data
      .split(" ")
      .map(type =>
        dataSwitch[type]
          ? getRandomEntry(dataSwitch[type]).value
          : type)

  // return the venue
  // note: to re-use functions and prevent lots of specific code
  // the return of this funciton must be wrapped in [{}]. Annoying,
  // but slightly better this way. (for now)
  return [{value: venue.build(inserts)}]
}

// export venue
module.exports = buildVenue

// Data Switch
// TODO: Abstract Data Switch
const dataSwitch = {
  "[adjective]": adjectives,
  "[noun]": nouns
}