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
      <div className='row'>
        <Card logo='LogoC.svg' />
        <Card logo='LogoC.svg' />
        <Card logo='LogoGolang.svg' />
        <Card logo='LogoGolang.svg' />
      </div>
      <div className='row'>
        <Card logo='LogoJava.svg' />
        <Card logo='LogoJava.svg' />
        <Card logo='LogoJs.svg' />
        <Card logo='LogoJs.svg' />
      </div>
      <div className='row'>
        <Card logo='LogoKotlin.svg' />
        <Card logo='LogoKotlin.svg' />
        <Card logo='LogoRust.svg' />
        <Card logo='LogoRust.svg' />
      </div>
    </div>
  )
}
