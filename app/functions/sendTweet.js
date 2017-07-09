// ****************
// Imports
// ****************
// config
const config = require("../config")

// modules
const twitter = require("twitter")

// ****************
// Function
// ****************
const sendTweet = tweet => {
  // create the twitter client
  const client = new twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
  })

  // send tweet
  client.post("statuses/update", {status: tweet}, error => 
    error ? console.log(error) : console.log("TWEET: ", tweet))
}

// export
module.exports = sendTweet