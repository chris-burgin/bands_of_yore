const tweets = [
  {
    data: "[band]",
    build: arr => `${arr[0]}`
  },
  {
    data: "[band] [venue]",
    build: arr => `${arr[0]} playing at ${arr[1]}.`
  },
]

module.exports = tweets