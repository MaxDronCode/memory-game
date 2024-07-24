'use client'
import Card from '@/components/card'
import '@/styles/grid.css'
import { useEffect, useState } from 'react'
import { formatMockData } from '@/utils/formattingFunctions'
import { validateMockData } from '@/utils/validationFunctions'
import { getGridDataFromMockData, getGridData } from '@/utils/gridFunctions'

export default function Grid ({ numRows = 3, numCols = 4, mockData }) {
  const [gridData, setGridData] = useState([])
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
          {row.map((card, cardIndex) => (
            <Card
              key={cardIndex}
              value={card.value}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
