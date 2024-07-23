import '@/styles/card.css'
export default function Card ({ logo }) {
  return (
    <div className='card covered'>
      <img src={logo} alt='Logo' />
    </div>
  )
}
