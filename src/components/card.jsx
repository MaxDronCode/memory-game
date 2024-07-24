import '@/styles/card.css'
import { useState } from 'react'

export default function Card ({ value }) {
  const [isCovered, setIsCovered] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)

  function changeStatus () {
    if (!isDisabled) {
      setIsCovered(!isCovered)
      setIsDisabled(true)
    }
  }

  function setClassName () {
    let className = 'card'
    if (isCovered) {
      className += ' covered'
    } else if (!isCovered && isDisabled) {
      className += ' uncovered disabled'
    }
    return className
  }

  return (
    <div className={setClassName()} onClick={changeStatus}>
      <img src={value + '.svg'} alt='Logo' />
    </div>
  )
}
