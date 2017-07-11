# Bands of Yore
Bands of Yore is a node bot that tweets fictional band names inspired by Dungeons and Dragons. This repo contains the source code for the twitter bot. Check out the bot at [@bandsofyore]( https://twitter.com/bandsofyore).

## Contributing
Check out the issues on how to contribute to this project. There are issues specifically designated for first-time contributors or someone new to Javascript and Node.

### Adding to the Dictionary
Check out `./app/data` and follow the existing syntax to contribute to the dictionary of words that application uses to create tweets. This is a great location to begin contributing.

As a note it will help to understand javascript [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) when looking at the dictionary. It is also important to note that at a base level all tweets are constructed from `[noun]` and `[adjective]` with the ability to create sub components such as `[band]` and `[venue]` that are then inserted into `[tweet]`.
