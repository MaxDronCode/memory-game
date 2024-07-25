import '@/styles/card.css'
import { useEffect, useState } from 'react'

export default function Card ({ rowIndex, colIndex, value, onUncover, wrongPairUncovered }) {
  const [isCovered, setIsCovered] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)

  function changeStatus () {
    if (!isDisabled) {
      setIsCovered(!isCovered)
      setIsDisabled(true)
    }
  }

  function handleClick () {
    changeStatus()
    onUncover(value, rowIndex, colIndex)
  }

  useEffect(() => {
    if (wrongPairUncovered.status === true) {
      if (wrongPairUncovered.card1.rowIndex === rowIndex && wrongPairUncovered.card1.colIndex === colIndex) {
        setIsCovered(true)
        setIsDisabled(false)
      } else if (wrongPairUncovered.card2.rowIndex === rowIndex && wrongPairUncovered.card2.colIndex === colIndex) {
        setIsCovered(true)
        setIsDisabled(false)
      }
    }
  }, [wrongPairUncovered])

  function setClassName () {
    let className = 'card'
    if (isCovered) {
      className += ' covered'
    } else if (!isCovered && isDisabled) {
      className += ' uncovered disabled flip-2-ver-left-2'
    }
    return className
  }

  return (
    <div className={setClassName()} onClick={handleClick} data-testid='card'>
      <div className='card-inner'>
        <div className='card-front'>
          {/* Parte frontal, puede ser una imagen de cubierta */}
        </div>
        <div className='card-back'>
          <img src={`${value}.svg`} alt='Logo' />
        </div>
      </div>
    </div>
  )
}
