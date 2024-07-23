import { render, screen, fireEvent } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Page from '../../src/app/page'

export function openTheGame () {
  render(<Page />)
}
// export function getTitle () {
//   const title = screen.getByTestId('app-title')
//   return title.innerHTML
// }

export function getGridSize () {
  const grid = screen.getByTestId('grid', { exact: true })
  return {
    rows: grid.children.length,
    columns: grid.children[0].children.length
  }
}
