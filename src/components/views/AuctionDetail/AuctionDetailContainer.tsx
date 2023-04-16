import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import Layout from '@/components/common/Layout/Layout'
import Subtitle from '@/components/common/Subtitle/Subtitle'
import { AUCTION_STATUS } from '@/components/views/Auction/AuctionContainer.constants'
import { Modal, ModalContext } from '@/components/views/AuctionDetail/AuctionDetailContainer.context'
import * as S from '@/components/views/AuctionDetail/AuctionDetailContainer.styled'
import Bidders from '@/components/views/AuctionDetail/Bidders'
import BidModal from '@/components/views/AuctionDetail/BidModal'
import Chat from '@/components/views/AuctionDetail/Chat'
import SignatureModal from '@/components/views/AuctionDetail/SignatureModal'
import WithdrawModal from '@/components/views/AuctionDetail/WithdrawModal'
import { getAccessTokenFromLocalStorage } from '@/features/auth/token'
import { getAuctionBidders, getAuctionDetail } from '@/services/api/auction'
import { getUserInfo } from '@/services/api/user'

const AuctionDetailContainer = () => {
  const { id } = useRouter().query

  const { data: auction } = useQuery(['auction', id], () => getAuctionDetail(Number(id)), {
    select: (data) => data.payload,
    enabled: !!id,
  })
  const { data: bidders } = useQuery(
    ['bidders', id],
    () => {
      if (!auction?.contract) {
        throw new Error('Auction contract is not defined')
      }
      return getAuctionBidders(auction?.contract)
    },
    {
      select: (data) => data?.payload.bidders,
      enabled: !!auction?.contract,
    }
  )
  const { data: user } = useQuery(['user'], () => getUserInfo(), {
    select: (data) => data.payload,
    enabled: !!getAccessTokenFromLocalStorage(),
  })

  const [modal, setModal] = useState<Modal>(null)

  const isChatAvailable =
    (auction?.status === 3 || auction?.status === 4) &&
    (auction?.writerEoa === user?.publicKey || bidders?.at(-1)?.bidder === user?.publicKey)

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {modal === 'bid' && <BidModal />}
      {modal === 'signature' && <SignatureModal />}
      {modal === 'withdraw' && <WithdrawModal />}
      {/* {isChatAvailable && <Chat />} */}
      <Layout>
        <S.Container>
          <S.Wrapper>
            <S.TitleWrapper>
              <S.AuctionTitle>{auction?.title}</S.AuctionTitle>
              <S.Writer size='2'>작성자: {auction?.writerEmail}</S.Writer>
            </S.TitleWrapper>
            {/* TODO: remove as string */}
            <S.Description dangerouslySetInnerHTML={{ __html: auction?.description as string }} />
          </S.Wrapper>
          <S.AuctionInfo>
            <S.Menu>
              <S.StatusTitle size='3'>{AUCTION_STATUS[auction?.status || 404]}</S.StatusTitle>
              <S.PriceWrapper>
                <Subtitle size='4'>입찰시작가</Subtitle>
                <Subtitle>{auction?.minPrice} MATIC</Subtitle>
              </S.PriceWrapper>
              <S.PriceWrapper>
                <Subtitle size='4'>즉시낙찰가</Subtitle>
                <Subtitle> {auction?.maxPrice} MATIC</Subtitle>
              </S.PriceWrapper>
              {auction?.status && auction?.status <= 2 && (
                <S.MenuButton onClick={() => setModal('bid')}>입찰하기</S.MenuButton>
              )}
              {auction?.status === 3 && bidders?.at(-1)?.bidder === user?.publicKey && (
                <S.MenuButton onClick={() => setModal('signature')}>서명하기</S.MenuButton>
              )}
              {auction?.status === 4 && auction.writerEoa === user?.publicKey && (
                <S.MenuButton onClick={() => setModal('withdraw')}>출금하기</S.MenuButton>
              )}
            </S.Menu>
            <Bidders contract={auction?.contract} />
          </S.AuctionInfo>
        </S.Container>
      </Layout>
    </ModalContext.Provider>
  )
}

export default AuctionDetailContainer
