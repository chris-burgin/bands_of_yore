const setWeight = (weight, obj) =>
  [...Array(weight).keys()]
    .map(() => obj)

module.exports = setWeight