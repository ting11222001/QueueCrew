import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
  <div className="flex h-screen justify-center items-center font-display">
    <a href='/rank/'>
      <Image src={'/../public/OptionsSmall.png'} width={1280} height={832} alt={'Image of the options page'} ></Image>
    </a>
  </div>

  )
}

export default Home
