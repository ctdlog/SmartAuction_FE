import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/common/Layout'
import Subtitle from '@/components/common/Subtitle'
import * as S from '@/components/views/Auction/AuctionContainer.styled'
import ROUTE from '@/constants/route'
import { getAuctions } from '@/services/api/auction'

import { AUCTION_STATUS } from './AuctionContainer.constants'

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
          {auctions?.auctions.map((auction) => {
            const imageUrl = `https://source.unsplash.com/random/288x200`
            return (
              <Link href={`${ROUTE.AUCTION}/${auction.id}`} key={auction.id}>
                <S.AuctionBlock key={auction.id}>
                  <Image src={imageUrl} width={288} height={200} alt='kitten' />
                  <S.Description>
                    <div>
                      <Subtitle size='4'>{auction.title}</Subtitle>
                      <S.Status status={auction.status}>{AUCTION_STATUS[auction.status]}</S.Status>
                    </div>
                    <div>
                      <span>{auction.initPrice} MATIC</span>
                      <span>~{auction.expiredAt.slice(0, 10)}</span>
                    </div>
                  </S.Description>
                </S.AuctionBlock>
              </Link>
            )
          })}
        </S.AuctionWrapper>
      </S.Container>
    </Layout>
  )
}

export default AuctionContainer
