'use client'
import Grid from './grid'
import '@/styles/game.css'
import MockDataForm from './mockDataForm'
import { useState, useEffect } from 'react'

export default function Game () {
  const [mockDataFormVisible, setMockDataFormVisible] = useState(false)
  const [mockData, setMockData] = useState('')

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  function handleKeyPress (e) {
    if (e.ctrlKey && e.key.toUpperCase() === 'M') {
      setMockDataFormVisible(!mockDataFormVisible)
    }
  }

  function setMockDataForm (data) {
    setMockData(data)
    setMockDataFormVisible(false)
  }

  return (
    <div className='game'>
      <h1>Memory Game</h1>
      {mockDataFormVisible && <MockDataForm setData={setMockDataForm} />}
      <Grid mockData={mockData} />
    </div>
  )
}
