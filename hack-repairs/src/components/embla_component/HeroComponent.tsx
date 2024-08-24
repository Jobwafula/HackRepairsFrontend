import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import './css/embla.css'
import './css/image.css'


const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 }

const SLIDES = [
  {
    className: 'slide1',
    heading: 'Phone Screen Repair & Sales',
    description: 'We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands.',
    link: '/products',
    linktext: 'Products'
  },
  {
    className: 'slide2',
    heading: 'Quality Gurantee',
    description: 'We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands.',
    link: '/contact',
    linktext: 'Contact'
  }
]

const HeroComponent = () => {
  return (
    <>
         <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  )
}

export default HeroComponent