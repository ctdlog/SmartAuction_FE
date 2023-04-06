import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
import * as S from '@/components/views/Auction/AuctionContainer.styled'
import ROUTE from '@/constants/route'
import { getAuctions } from '@/services/api/auction'

const AuctionContainer = () => {
  const { data: auctions } = useQuery(['auctions'], () => getAuctions(15, 0), {
    select: (data) => data.payload,
  })

  return (
    <S.Container>
      <Link href={ROUTE.AUCTION_WRITE}>
        <S.Button>경매 글 작성하기</S.Button>
      </Link>
      <h1>현재 진행중인 경매 목록</h1>
      <S.AuctionWrapper>
        {auctions?.auctions.map((auction) => (
          <S.AuctionBlock key={auction.id}>
            <Image src='http://placekitten.com/288/200' width={288} height={200} alt='kitten' />
            <S.Description>
              <Subtitle size='4'>{auction.title}</Subtitle>
              <span>작성자: {auction.writer}</span>
            </S.Description>
          </S.AuctionBlock>
        ))}
      </S.AuctionWrapper>
    </S.Container>
  )
}

export default AuctionContainer
