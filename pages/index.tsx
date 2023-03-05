import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen justify-center items-center font-display">
    <div className="text-center">
      <h1 className="text-5xl">What type of decision are you making?</h1>

      <div className="flex justify-center">
        <Button name="BIG" background="#FCC931" link="/choose_big"/>
        <Button name="small" background="#8870FF" link="/choose_small"/>
      </div>

    </div>
  </div>

  )
}

export default Home
