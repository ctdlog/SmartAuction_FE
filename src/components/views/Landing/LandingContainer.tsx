import Header from '@/components/common/Header'

import * as S from './Landing.styled'

const LandingContainer = () => {
  return (
    <S.Layout>
      <Header />
      <S.Main>
        <h1>Smart Auction</h1>
        <h2>Deploy</h2>
      </S.Main>
    </S.Layout>
  )
}

export default LandingContainer
