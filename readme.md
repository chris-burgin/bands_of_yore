# Bands of Yore
Bands of Yore is a node bot that tweets fictional band names inspired by Dungeons and Dragons. This repo contains the source code for the twitter bot. Check out the bot at [@bandsofyore]( https://twitter.com/bandsofyore).

## Requirements
- Node `8.3.0` or Greater

## Install
### Clone The Repo
`git clone https://github.com/chrisburgin95/bands_of_yore.git`

### Twitter Environment Variables
Setup the following environment variables for your twitter API access. You can do that at [https://apps.twitter.com/](https://apps.twitter.com/).
- `CONSUMER_KEY`
- `CONSUMER_SECRET`
- `ACCESS_TOKEN_KEY`
- `ACCESS_TOKEN_SECRET`

### Run The Application
`node index.js`

## Contributing
Check out the issues on how to contribute to this project. There are issues specifically designated for first-time contributors or someone new to Javascript and Node.

### Adding to the Dictionary
Check out `./app/data` and follow the existing syntax to contribute to the dictionary of words that application uses to create tweets. This is a great location to begin contributing.

As a note it will help to understand javascript [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) when looking at the dictionary. It is also important to note that at a base level all tweets are constructed from `[noun]` and `[adjective]` with the ability to create sub components such as `[band]` and `[venue]` that are then inserted into `[tweet]`.