export function validateMockData (mockData) {
  let isValidData
  if (mockData === undefined) {
    isValidData = false
  } else {
    if (mockData.includes('-')) {
      isValidData = validateMockDataRows(mockData.split('-'))
    } else {
      isValidData = validateMockDataRow(mockData)
    }
  }
  return isValidData
}

export function validateMockDataRows (dataRows) {
  let isValidData = true
  for (let i = 0; i < dataRows.length; i += 1) {
    if (dataRows[i].length > 4) {
      isValidData = false
      break
    }
    isValidData = validateMockDataRow(dataRows[i])
    if (!isValidData) {
      break
    }
  }
  return isValidData
}

export function validateMockDataRow (data) {
  if (data.length > 4) {
    return false
  }
  const newLocal = '^[123456]*$'
  const regex = new RegExp(newLocal)
  return regex.test(data)
}
