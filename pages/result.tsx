import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
  <div className="flex h-screen justify-center items-center font-display">
    <a href='/'>
      <Image src={'/../public/Result.png'} width={1269} height={778} alt={'Image of the result page'} ></Image>
    </a>
  </div>

  )
}

export default Home
