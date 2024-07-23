import Card from '@/components/card'

export default function Grid () {
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
