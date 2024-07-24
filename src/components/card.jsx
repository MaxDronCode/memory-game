import '@/styles/card.css'
import { useState } from 'react'

export default function Card ({ value }) {
  const [isCovered, setIsCovered] = useState(true)

  return (
    <div className={'card' + (isCovered ? ' covered' : '')} onClick={() => setIsCovered(!isCovered)}>
      <img src={value + '.svg'} alt='Logo' />
    </div>
  )
}
