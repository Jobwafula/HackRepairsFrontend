'use client'; 

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Image from 'next/image';
import Link from 'next/link';

type Slide = {
  className: string;
  heading: string;
  description: string;
  link: string;
};

type PropType = {
  slides: Slide[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), Autoplay()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi) 
  return (
    <div className="embla">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container h-screen w-screen">
            {slides.map((slide, index) => (
              <div className={`embla__slide ${slide.className}`} key={index}>
                 <div className="text-center flex flex-col justify-center items-center lg:items-start z-50 lg:text-left h-full">
                    <h2 className="text-3xl font-bold text-white  md:text-black md:text-6xl">{slide.heading}</h2>
                    <p className='mt-6 text-xl  md:text-lg text-white  md:text-gray-600'>{slide.description}</p>
                    <Link className="mt-8 bg-[#003300] hover:bg-green-800 transition duration-300 p-4 text-white py-2 px-6 rounded-full text-lg" href={slide.link}>{slide.link.replace("/", "")}</Link>
                  </div>
              </div>
            ))}
        </div>
      </div>

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default EmblaCarousel
