import '@/styles/card.css'
import { useState } from 'react'

export default function Card ({ logo }) {
  const [isCovered, setIsCovered] = useState(true)

  return (
    <div className={
      'card' + (isCovered ? ' covered' : '')
    }
    >
      <img src={logo} alt='Logo' />
    </div>
  )
}
