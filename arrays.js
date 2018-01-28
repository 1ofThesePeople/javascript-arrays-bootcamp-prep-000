var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(initial, addition) {
  return [addition, ...initial]
}

function destructivelyAddElementToBeginningOfArray(initial, addition) {
  return initial.push(addition)
}
