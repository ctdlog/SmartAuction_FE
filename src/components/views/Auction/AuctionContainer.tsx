import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import Layout from '@/components/common/Layout'
import Subtitle from '@/components/common/Subtitle'
import * as S from '@/components/views/Auction/AuctionContainer.styled'
import ROUTE from '@/constants/route'
import { isLoggedIn } from '@/features/auth/token'
import { getAuctions } from '@/services/api/auction'

import { AUCTION_STATUS } from './AuctionContainer.constants'

const AuctionContainer = () => {
  const { push } = useRouter()
  const { data: auctions } = useQuery(['auctions'], () => getAuctions(15, 0), {
    select: (data) => data.payload,
  })

  const moveToCreateAuction = () => {
    if (!isLoggedIn()) {
      toast.error('로그인이 필요한 서비스입니다.')
      return
    }
    push(ROUTE.AUCTION_WRITE)
  }

  return (
    <Layout>
      <S.Container>
        <h1>현재 진행중인 경매 목록</h1>
        <S.Button onClick={moveToCreateAuction}>경매 글 작성하기</S.Button>
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
                      <span>{auction.minPrice} MATIC</span>
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
