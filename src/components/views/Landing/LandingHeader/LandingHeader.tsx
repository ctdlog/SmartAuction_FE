import Image from 'next/image'
import Link from 'next/link'

import * as S from '@/components/views/Landing/LandingHeader/LandingHeader.styled'
import ROUTE from '@/constants/route'

interface Props {
  scrollToIndex: (index: number) => void
}

const LandingHeader = ({ scrollToIndex }: Props) => {
  return (
    <S.Header>
      <Image
        src={'https://blockchain-lighthouse.s3.ap-northeast-2.amazonaws.com/common/logo_rm.png'}
        width={125}
        height={100}
        alt='logo'
      />
      <S.Nav>
        <ul>
          <li onClick={() => scrollToIndex(0)}>
            <span>About</span>
          </li>
          <li onClick={() => scrollToIndex(1)}>
            <span>Description</span>
          </li>
          {/* <li onClick={() => scrollToIndex(2)}>
            <span>Event</span>
          </li> */}
          <li onClick={() => scrollToIndex(3)}>
            <span>Roadmap</span>
          </li>
        </ul>
      </S.Nav>
      <S.StyledLink href={ROUTE.AUCTION}>
        <span>Go to Auction</span>
        <i className='ri-arrow-right-line' />
      </S.StyledLink>
    </S.Header>
  )
}

export default LandingHeader
