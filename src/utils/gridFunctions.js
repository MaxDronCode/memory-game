export function getGridDataFromMockData (data) {
  const board = []

  let mockBoard = data.split('-')
  mockBoard = mockBoard.map((row) => { return row.split('') })
  for (let row = 0; row < mockBoard.length; row += 1) {
    board.push([])
    for (let column = 0; column < mockBoard[0].length; column += 1) {
      board[row].push({
        y: row,
        x: column,
        value: mockBoard[row][column]
      })
    }
  }
  return board
}
export function getGridData (numRows, numCols) {
  const gridData = []
  const possibleValues = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
  function assignPossibleValue () {
    const index = Math.floor(Math.random() * possibleValues.length)
    return possibleValues.splice(index, 1)[0]
  }
  for (let row = 0; row < numRows; row += 1) {
    gridData.push([])
    for (let column = 0; column < numCols; column += 1) {
      gridData[row].push({
        y: row,
        x: column,
        value: assignPossibleValue()
      })
    }
  }
  return gridData
}
