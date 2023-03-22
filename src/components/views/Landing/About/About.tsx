import Image from 'next/image'

import TradeImage from '@/assets/images/trade.jpeg'

import * as S from './About.styled'

const About = () => {
  return (
    <S.Section>
      <S.Block>
        <h1>Secure second-hand</h1>
        <strong>Trade service</strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Quisquam voluptatum, quod, quia, voluptas quae voluptates quibusdam
        </p>
        <button>Learn More</button>
      </S.Block>
      <S.ImageWrapper>
        <Image src={TradeImage} width={924} height={1368} alt='trade' />
      </S.ImageWrapper>
    </S.Section>
  )
}

export default About
