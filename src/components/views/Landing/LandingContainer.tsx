import Header from '@/components/common/Header'
import About from '@/components/views/Landing/About'
import Description from '@/components/views/Landing/Description'
import Event from '@/components/views/Landing/Event'
import useScroll from '@/components/views/Landing/hooks/useScroll'

import * as S from './Landing.styled'
import Roadmap from './Roadmap'

const LandingContainer = () => {
  const { containerRef } = useScroll()

  return (
    <S.Layout>
      <Header />
      <S.ScrollBlock ref={containerRef}>
        <About />
        <Description />
        <Event />
        <Roadmap />
      </S.ScrollBlock>
    </S.Layout>
  )
}

export default LandingContainer
