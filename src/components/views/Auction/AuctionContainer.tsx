import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/common/Layout'
import Subtitle from '@/components/common/Subtitle'
import * as S from '@/components/views/Auction/AuctionContainer.styled'
import ROUTE from '@/constants/route'
import { getAuctions } from '@/services/api/auction'

const AuctionContainer = () => {
  const { data: auctions } = useQuery(['auctions'], () => getAuctions(15, 0), {
    select: (data) => data.payload,
  })

  return (
    <Layout>
      <S.Container>
        <h1>현재 진행중인 경매 목록</h1>
        <Link href={ROUTE.AUCTION_WRITE}>
          <S.Button>경매 글 작성하기</S.Button>
        </Link>
        <S.AuctionWrapper>
          {auctions?.auctions.map((auction) => (
            <Link href={`${ROUTE.AUCTION}/${auction.id}`} key={auction.id}>
              <S.AuctionBlock key={auction.id}>
                <Image src='http://placekitten.com/288/200' width={288} height={200} alt='kitten' />
                <S.Description>
                  <Subtitle size='4'>{auction.title}</Subtitle>
                  <span>작성자: {auction.writer}</span>
                </S.Description>
              </S.AuctionBlock>
            </Link>
          ))}
        </S.AuctionWrapper>
      </S.Container>
    </Layout>
  )
}

export default AuctionContainer
