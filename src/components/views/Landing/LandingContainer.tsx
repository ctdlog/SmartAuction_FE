import { useRef, WheelEvent } from 'react'

import Header from '@/components/common/Header'
import About from '@/components/views/Landing/About'
import Description from '@/components/views/Landing/Description'
import Event from '@/components/views/Landing/Event'

import * as S from './Landing.styled'

const LandingContainer = () => {
  const scrollableDivRef = useRef<HTMLDivElement>(null)

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    const { deltaY } = e
    const { scrollTop } = scrollableDivRef.current as HTMLDivElement
    const pageHeight = window.innerHeight
    const isScrollingDown = deltaY > 0
    const scrollDirection = isScrollingDown ? 1 : -1
    const nextPageTop = pageHeight * (Math.floor(scrollTop / pageHeight) + scrollDirection)

    scrollableDivRef.current?.scrollTo({
      top: nextPageTop,
      behavior: 'smooth',
    })
  }

  return (
    <S.Layout>
      <Header />
      <S.ScrollBlock ref={scrollableDivRef} onWheel={handleWheel}>
        <About />
        <Description />
        <Event />
      </S.ScrollBlock>
    </S.Layout>
  )
}

export default LandingContainer
