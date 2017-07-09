// ****************
// Imports
// ****************
// import data
const nouns = require("../data/nouns")
const adjectives = require("../data/adjectives")

// import functions
const getRandomEntry = require("./getRandomEntry")

// ****************
// Function
// ****************
// build component function
const buildComponent = (components) => {
  // get new component
  const component = getRandomEntry(components)

  // build component inserts
  const inserts = 
    component.data
      .split(" ")
      .map(type =>
        dataSwitch[type]
          ? getRandomEntry(dataSwitch[type]).value
          : type)

  // return the component
  // note: to re-use functions and prevent lots of specific code
  // the return of this funciton must be wrapped in [{}]. Annoying,
  // but slightly better this way. (for now)
  return [{value: component.build(inserts)}]
}

// export component
module.exports = buildComponent

// Data Switch
// TODO: Abstract Data Switch
const dataSwitch = {
  "[adjective]": adjectives,
  "[noun]": nouns
}