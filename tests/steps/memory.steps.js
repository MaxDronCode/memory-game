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
