import Header from '@/components/common/Header'
import About from '@/components/views/Landing/About'
import Event from '@/components/views/Landing/Event'
import useScroll from '@/components/views/Landing/hooks/useScroll'

import * as S from './Landing.styled'

const LandingContainer = () => {
  const { containerRef } = useScroll()

  return (
    <S.Layout>
      <Header />
      <S.ScrollBlock ref={containerRef}>
        <About />
        <Event />
        <section>
          <h1>Page 3</h1>
        </section>
      </S.ScrollBlock>
    </S.Layout>
  )
}

export default LandingContainer
