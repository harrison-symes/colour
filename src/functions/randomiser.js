function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function populateArray(array) {
  return array.map(row => {
    return row.map(idx => {
      return {
        colour: getRandomColor()
      }
    })
  })
}

function createColour() {
  return {
    colour: getRandomColor()
  }
}

function generateArray(size) {
  return Array(size).fill([]).map((idx) => {
    return Array(size).fill({})
  })
}

module.exports = {
  getRandomColor,
  populateArray,
  generateArray,
  createColour
}
