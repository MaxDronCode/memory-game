import { loadFeature, defineFeature } from 'jest-cucumber'
const feature = loadFeature('./src/features/sample.feature')
defineFeature(feature, (test) => {
  test('Test the sample feature', ({ given, then, pending }) => {
    given('I am on the homepage', () => {
      pending()
    })
    then(/^I should see the "(.*)" text$/, (arg0) => {
      pending()
    })
  })
})