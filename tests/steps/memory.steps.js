import { render, screen, fireEvent } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Page from '../../src/app/page'

export function openTheGame () {
  render(<Page />)
}

export function checkGridSize (numRows, numColumns) {
  const grid = screen.getByTestId('grid')
  const rows = grid.children
  const cards1row = rows[0].children
  const cards2row = rows[1].children
  const cards3row = rows[2].children
  return rows.length === Number(numRows) && cards1row.length === Number(numColumns) && cards2row.length === Number(numColumns) && cards3row.length === Number(numColumns)
}

export function allCardsCovered () {
  const grid = screen.getByTestId('grid')
  const rows = grid.children
  const cards1row = rows[0].children
  const cards2row = rows[1].children
  const cards3row = rows[2].children
  const allCards = [...cards1row, ...cards2row, ...cards3row]
  return allCards.every(card => card.classList.contains('covered'))
}

export function allCardsEnabled () {
  const grid = screen.getByTestId('grid')
  const rows = grid.children
  const cards1row = rows[0].children
  const cards2row = rows[1].children
  const cards3row = rows[2].children
  const allCards = [...cards1row, ...cards2row, ...cards3row]
  return allCards.every(card => !card.classList.contains('disabled'))
}

export function setMockData (data) {
  data = data.trim()

  fireEvent.keyDown(screen.getByTestId('grid'), {
    key: 'm',
    keyCode: 77,
    which: 77,
    code: 'KeyM',
    location: 0,
    altKey: false,
    ctrlKey: true,
    metaKey: false,
    shiftKey: false,
    repeat: false
  })

  const textInput = screen.getByTestId('mock-data-input')
  const submitButton = screen.getByTestId('mock-data-submit')
  fireEvent.change(textInput, { target: { value: data } })
  fireEvent.click(submitButton)
}

export function uncoverCard (rowPosition, colPosition) {
  const grid = screen.getByTestId('grid')
  const rows = grid.children
  const card = rows[rowPosition - 1].children[colPosition - 1]
  fireEvent.click(card)
}

export function isCardUncovered (rowPosition, colPosition) {
  const grid = screen.getByTestId('grid')
  const rows = grid.children
  const card = rows[rowPosition - 1].children[colPosition - 1]
  return !card.classList.contains('covered')
}
