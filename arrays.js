var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(initial, addition) {
  return [addition, ...initial]
}

function destructivelyAddElementToBeginningOfArray(initial, addition) {
  initial.unshift(addition)
  return initial
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

function destructivelyRemoveElementFromBeginningOfArray(initial) {
  initial.shift()
  return initial
}

function removeElementFromBeginningOfArray(initial) {
  initial.slice(1)
  return initial
}

function destructivelyRemoveElementFromEndOfArray(initial) {

}
