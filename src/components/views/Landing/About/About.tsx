import Image from 'next/image'
import Link from 'next/link'

import SmartAuctionImage from '@/assets/images/smart-auction.png'
import ROUTE from '@/constants/route'

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
        <Link href={ROUTE.AUCTION}>
          <button>Go Demo</button>
        </Link>
      </S.Block>
      <S.ImageWrapper>
        <Image src={SmartAuctionImage} width={924} height={1368} alt='trade' />
      </S.ImageWrapper>
    </S.Section>
  )
}

export default About
