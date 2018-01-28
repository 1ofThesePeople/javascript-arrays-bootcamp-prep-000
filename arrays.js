var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(initial, addition) {
  return [addition, ...initial]
}

function destructivelyAddElementToBeginningOfArray(initial, addition) {
  return initial.unshift(addition)
}

function addElementToEndOfArray(initial, addition) {
  return [...initial, addition]
}

function destructivelyAddElementToEndOfArray(initial, addition) {
  return initial.push(addition)
}

function accessElementInArray(initial, index) {
  return initial[index]
}