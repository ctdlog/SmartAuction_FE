import { useRef, WheelEvent } from 'react'

import Header from '@/components/common/Header'

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
        <section
          style={{
            background: '#ff8787',
          }}
        >
          <h1>Page 1</h1>
        </section>
        <section
          style={{
            background: '#9775fa',
          }}
        >
          <h1>Page 2</h1>
        </section>
        <section
          style={{
            background: '#4dabf7',
          }}
        >
          <h1>Page 3</h1>
        </section>
      </S.ScrollBlock>
    </S.Layout>
  )
}

export default LandingContainer
