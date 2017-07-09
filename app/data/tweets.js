const tweets = [
  {
    data: "[noun] [noun]",
    build: arr => `${arr[0]} and the ${arr[1]}.`
  },
  {
    data: "[noun] [noun]",
    build: arr => `${arr[0]} of ${arr[1]}.`
  }
]

module.exports = tweets
