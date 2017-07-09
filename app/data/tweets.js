const tweets = [
  {
    data: "[noun] [noun]",
    build: arr => `${arr[0]} and the ${arr[1]}.`
  },
  {
    data: "[noun] [adjective] [noun]",
    build: arr => `${arr[0]} and the ${arr[1]} ${arr[2]}.`
  },
  {
    data: "[noun] [noun]",
    build: arr => `${arr[0]} and ${arr[1]}.`
  },
  {
    data: "[adjective] [noun]",
    build: arr => `${arr[0]} and ${arr[1]}.`
  },
  {
    data: "[noun] [noun]",
    build: arr => `${arr[0]} of ${arr[1]}.`
  },
  {
    data: "[noun] [noun]",
    build: arr => `${arr[0]} ${arr[1]}.`
  },
  {
    data: "[adjective] [noun] [noun]",
    build: arr => `${arr[0]} ${arr[1]} ${arr[2]}.`
  },
  {
    data: "[noun] [noun] [noun]",
    build: arr => `${arr[0]} ${arr[1]} ${arr[2]}.`
  },
  {
    data: "[noun] [noun] [noun]",
    build: arr => `${arr[0]} ${arr[1]} and ${arr[2]}.`
  },
  {
    data: "[noun] [noun] [noun]",
    build: arr => `${arr[0]} ${arr[1]} and the ${arr[2]}.`
  },
  {
    data: "[adjective] [noun] [noun]",
    build: arr => `${arr[0]} ${arr[1]} of ${arr[2]}.`
  },
  {
    data: "[noun] [noun] [noun]",
    build: arr => `${arr[0]} ${arr[1]} of ${arr[2]}.`
  },
  {
    data: "[noun] [noun] [adjective]",
    build: arr => `${arr[0]} the ${arr[1]} ${arr[2]}.`
  },
  {
    data: "[noun] [noun]",
    build: arr => `${arr[0]} slayer of ${arr[1]}.`
  },
  {
    data: "[adjective] [noun]",
    build: arr => `${arr[0]} ${arr[1]}.`
  },
  {
    data: "[adjective] [noun]",
    build: arr => `${arr[0]} of ${arr[1]}.`
  }
]

module.exports = tweets
