import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import Hero from '../components/hero';

export default function HomePage() {
  return (
    <Fragment>
        <Hero />
    </Fragment>
  )
}
