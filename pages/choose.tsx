import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'

const Home: NextPage = () => {
  return (
  <div className="flex h-screen justify-center items-center font-display">
    <a href='/'>
      <Image src={'/../public/Options.png'} width={1280} height={832} alt={'Image of the options page'} ></Image>
    </a>
  </div>

  )
}

export default Home
