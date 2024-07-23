import Grid from './grid'
import '@/styles/game.css'

export default function Game () {
  return (
    <div className='game'>
      <h1>Memory Game</h1>
      <Grid />
    </div>
  )
}
