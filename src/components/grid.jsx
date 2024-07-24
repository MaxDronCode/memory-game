'use client'
import Card from '@/components/card'
import '@/styles/grid.css'
import { useEffect, useState } from 'react'
import { formatMockData } from '@/utils/formattingFunctions'
import { validateMockData } from '@/utils/validationFunctions'
import { getGridDataFromMockData, getGridData } from '@/utils/gridFunctions'

export default function Grid ({ numRows = 3, numCols = 4, mockData }) {
  const [gridData, setGridData] = useState([])
  const [uncoveredCards, setUncoveredCards] = useState([])
  const [wrongPairUncovered, setWrongPairUncovered] = useState({ status: false, card1: null, card2: null })

  function handlePairing (value, rowIndex, colIndex) {
    if (uncoveredCards.length < 2) {
      setUncoveredCards([...uncoveredCards, { value, rowIndex, colIndex }])
    }
  }

  useEffect(() => {
    if (uncoveredCards.length === 2) {
      const [firstCard, secondCard] = uncoveredCards
      if (firstCard.value !== secondCard.value) {
        setWrongPairUncovered({ status: true, card1: firstCard, card2: secondCard })
      } else {
        setWrongPairUncovered({ status: false, card1: null, card2: null })
      }
      setUncoveredCards([])
    }
    console.log('uncoveredCards', uncoveredCards)
  }, [uncoveredCards])

  useEffect(() => {
    let preData = formatMockData(mockData)
    if (preData !== '' && validateMockData(preData)) {
      preData = getGridDataFromMockData(preData)
    } else {
      preData = getGridData(numRows, numCols)
    }
    setGridData(preData)
  }, [mockData])

  return (
    <div data-testid='grid' className='grid'>
      {gridData.map((row, rowIndex) => (
        <div className='row' key={rowIndex}>
          {row.map((card, colIndex) => (
            <Card
              key={colIndex}
              rowIndex={rowIndex}
              colIndex={colIndex}
              value={card.value}
              onUncover={handlePairing}
              wrongPairUncovered={wrongPairUncovered}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
