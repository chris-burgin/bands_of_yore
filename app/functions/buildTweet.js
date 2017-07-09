// ****************
// Imports
// ****************
// import data
const nouns = require("../data/nouns")
const tweets = require("../data/tweets")

// import functions
const randomNumber = require("./randomNumber") 

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

// export tweet
module.exports = buildTweet

// ****************
// Functions
// ****************
// get random from array
const getRandomEntry = (data) =>
  data[randomNumber(0, data.length - 1)]

// data switch for tweets
const dataSwitch = {
  "[noun]": nouns
}