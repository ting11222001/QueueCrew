import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
  <div className="flex h-screen justify-center items-center font-display">
    <a href='/result'>
      <Image src={'/../public/Wheel.png'} width={1269} height={778} alt={'Image of the wheel page'} ></Image>
    </a>
  </div>

  )
}

export default Home
