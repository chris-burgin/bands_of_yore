// ****************
// Imports
// ****************
// import data
const adjectives = require("../data/adjectives")
const nouns = require("../data/nouns")
const tweets = require("../data/tweets")
const bands = require("../data/bands")
const venues = require("../data/venues")

// import functions
const getRandomEntry = require("./getRandomEntry")
const buildComponent = require("./buildComponent") 

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
  "[band]": buildComponent(bands),
  "[noun]": nouns,
  "[venue]": buildComponent(venues)
}