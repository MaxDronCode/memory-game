import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from './steps/memory.steps'

const feature = loadFeature('./tests/features/memory.core.feature')

defineFeature(feature, (test) => {
  test('Starting the Game - Grid default size 3x4', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    then(/^the grid should have "(.*)" rows and "(.*)" columns$/, (numRows, numColumns) => {
      expect(steps.getGridSize()).toEqual({ rows: numRows, columns: numColumns })
    })
  })
})
