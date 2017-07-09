// ****************
// Imports
// ****************
// import data
const adjectives = require("../data/adjectives")
const nouns = require("../data/nouns")
const tweets = require("../data/tweets")

// import functions
const getRandomEntry = require("./getRandomEntry")
const buildBand = require("./buildBand") 
const buildVenue = require("./buildVenue") 

// ****************
// Function
// ****************
// build tweet function
const buildTweet = () => {
  // get new tweet
  const tweet = getRandomEntry(tweets)

  // build tweet inserts
  const inserts = 
    tweet.data
      .split(" ")
      .map(type =>
        dataSwitch[type]
          ? getRandomEntry(dataSwitch[type]).value
          : type)

  // return the tweet
  return tweet.build(inserts)
}

// export function
module.exports = buildTweet

// Data Switch
// TODO: Abstract Data Switch
const dataSwitch = {
  "[adjective]": adjectives,
  "[band]": buildBand(),
  "[noun]": nouns,
  "[venue]": buildVenue()
}