import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from './steps/memory.steps'

const feature = loadFeature('./tests/features/memory.core.feature')

defineFeature(feature, (test) => {
  test('Starting the Game - Grid default size 3x4', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    then(/^the grid should have "(.*)" rows and "(.*)" columns$/, (numRows, numColumns) => {
      expect(steps.checkGridSize(numRows, numColumns)).toBe(true)
    })
  })
  test('Starting the Game - All cards should be covered', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    then('all the cards should be covered', () => {
      expect(steps.allCardsCovered()).toBe(true)
    })
  })

  test('Starting the Game - All the cards should be enabled', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    then('all the cards should be enabled', () => {
      expect(steps.allCardsEnabled()).toBe(true)
    })
  })

  test('Uncovering a card with the mouse - Using mouse left click', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data:', (docString) => {
      steps.setMockData(docString)
    })

    when(/^the player clicks the card at \((\d+), (\d+)\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    then(/^the card at \((\d+), (\d+)\) should be uncovered$/, (rowPosition, colPosition) => {
      expect(steps.isCardUncovered(rowPosition, colPosition)).toBe(true)
    })
  })

  test('Uncovering a card - Disabling the card', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data:', (docString) => {
      steps.setMockData(docString)
    })

    when(/^the player uncovers the card at \((\d+), (\d+)\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    then(/^the card at \((\d+), (\d+)\) should be disabled$/, (rowPosition, colPosition) => {
      expect(steps.isCardDisabled(rowPosition, colPosition)).toBe(true)
    })
  })

  test('Uncovering a wrong pair - They become covered again', ({ given, when, and, then, pending }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data:', (docString) => {
      steps.setMockData(docString)
    })

    when(/^the player uncovers the card at \((\d+), (\d+)\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    and(/^the player uncovers the card at \((\d+), (\d+)\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    then(/^the card at \((\d+), (\d+)\) should be covered$/, (rowPosition, colPosition) => {
      expect(steps.isCardUncovered(rowPosition, colPosition)).toBe(false)
    })

    and(/^the card at \((\d+), (\d+)\) should be covered$/, (rowPosition, colPosition) => {
      expect(steps.isCardUncovered(rowPosition, colPosition)).toBe(false)
    })
  })

  test('Uncovering a correct pair - They remain uncovered', ({ given, when, and, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })

    given('the player loads the following mock data:', (docString) => {
      steps.setMockData(docString)
    })

    when(/^the player uncovers the card at \((\d+), (\d+)\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    and(/^the player uncovers the card at \((\d+), (\d+)\)$/, (rowPosition, colPosition) => {
      steps.uncoverCard(rowPosition, colPosition)
    })

    then(/^the card at \((\d+), (\d+)\) should be uncovered$/, (rowPosition, colPosition) => {
      expect(steps.isCardUncovered(rowPosition, colPosition)).toBe(true)
    })

    and(/^the card at \((\d+), (\d+)\) should be uncovered$/, (rowPosition, colPosition) => {
      expect(steps.isCardUncovered(rowPosition, colPosition)).toBe(true)
    })
  })

  test('Uncovering all pairs - The game should be over', ({ given, when, and, then, pending }) => {
    given('the player opens the game', () => {

    })

    given('the player loads the following mock data:', (docString) => {

    })

    when(/^the player uncovers the card at \((\d+), (\d+)\)$/, (arg0, arg1) => {

    })

    and(/^the player uncovers the card at \((\d+), (\d+)\)$/, (arg0, arg1) => {

    })

    and(/^the player uncovers the card at \((\d+), (\d+)\)$/, (arg0, arg1) => {

    })

    and(/^the player uncovers the card at \((\d+), (\d+)\)$/, (arg0, arg1) => {

    })

    then('the game should be over', () => {
      pending()
    })
  })
})
