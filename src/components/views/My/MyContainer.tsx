import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import ROUTE from '@/constants/route'
import { getBiddedAuctionApi, getMyAuction } from '@/services/api/auction'
import { Auction } from '@/services/api/auction/types'
import { getUserInfo, myFavoriteAuctions } from '@/services/api/user'

import * as S from './My.styled'

const MyContainer = () => {
  const [MenuFlag, setMenuFlag] = useState(0)
  const [Content, setContent] = useState<Auction[]>([])

  const { data: user } = useQuery(['user'], () => getUserInfo(), {
    select: (data) => data.payload,
  })

  // 관심목록
  const getMyFavorite = async () => {
    if (user) {
      const result = await myFavoriteAuctions()
      setContent(result.payload.auctions)
      setMenuFlag(1)
      console.log(result)
    } else {
      console.log(`유저없음 에러처리`)
    }
  }

  // 내가 쓴 옥션
  const getAuction = async () => {
    if (user) {
      const result = await getMyAuction(user.id, 0, 0)
      setContent(result.payload.auctions)
      setMenuFlag(2)
    } else {
      console.log(`유저없음_에러처리`)
    }
  }

  // 입찰목록
  const getBiddedAuction = async () => {
    if (user) {
      const result = await getBiddedAuctionApi(user.id, 0, 0)
      console.log(result)
      setContent(result.payload.auctions)
      setMenuFlag(3)
    } else {
      console.log(`유저없음_에러처리`)
    }
  }

  return (
    <S.Layout>
      {/* User Information Box */}
      <S.Title>유저 프로필</S.Title>

      {user?.email && (
        <S.Table>
          <S.TableRow>
            <S.TableRow_Name>[ 이메일 ]</S.TableRow_Name>
            <span>{user.email}</span>
          </S.TableRow>
          <S.TableRow>
            <S.TableRow_Name>[ 닉네임 ]</S.TableRow_Name>
            <span>{user.nickname}</span>
          </S.TableRow>
          <S.TableRow>
            <S.TableRow_Name>[ 지갑주소 ]</S.TableRow_Name>
            <span>{user.publicKey}</span>
          </S.TableRow>
          <S.TableRow>
            <S.TableRow_Name>[ 잔액 ]</S.TableRow_Name>
            <span>{user.balance} Matic</span>
          </S.TableRow>
          <S.TableRow>
            <S.TableRow_Name>[ 가입일 ]</S.TableRow_Name>
            <span>{user.registeredAt.split('T')[0]}</span>
          </S.TableRow>
        </S.Table>
      )}

      {/* User Board */}
      <S.Title>유저 보드</S.Title>

      <S.UserBoard>
        {/* 메뉴 */}
        <S.UserBoard_Menu>
          <S.UserBoard_Menu_Content onClick={getMyFavorite}>관심목록</S.UserBoard_Menu_Content>
          <S.UserBoard_Menu_Content onClick={getAuction}>내 경매</S.UserBoard_Menu_Content>
          <S.UserBoard_Menu_Content onClick={getBiddedAuction}>입찰경매</S.UserBoard_Menu_Content>
        </S.UserBoard_Menu>

        {/* 여기 컨텐츠 (My Favorite) */}
        <div>
          {MenuFlag == 1 &&
            Content &&
            Content.map((item, idx) => (
              <Link href={`${ROUTE.AUCTION}/${item.id}`} key={item.id}>
                <S.ContentBox>
                  <div>{item.id}</div>
                  <div>{item.title}</div>
                  {item.status == 1 || item.status == 2 ? (
                    <div>경매 진행중</div>
                  ) : item.status == 3 ? (
                    <div>거래중</div>
                  ) : item.status == 4 || item.status == 5 ? (
                    <div>경매종료</div>
                  ) : (
                    <div>경매사고</div>
                  )}

                  <div>{item.createdAt.split('T')[0]}</div>
                </S.ContentBox>
              </Link>
            ))}
        </div>

        {/* 여기 컨텐츠 (My Auction) */}
        <div>
          {MenuFlag == 2 &&
            Content &&
            Content.map((item, idx) => (
              <Link href={`${ROUTE.AUCTION}/${item.id}`} key={item.id}>
                <S.ContentBox>
                  <div>{item.id}</div>
                  <div>{item.title}</div>

                  {item.status == 1 || item.status == 2 ? (
                    <div>경매 진행중</div>
                  ) : item.status == 3 ? (
                    <div>거래중</div>
                  ) : item.status == 4 || item.status == 5 ? (
                    <div>경매종료</div>
                  ) : (
                    <div>경매사고</div>
                  )}

                  <div>{item.createdAt.split('T')[0]}</div>
                </S.ContentBox>
              </Link>
            ))}
        </div>

        {/* 여기 컨텐츠 (Bidded) */}
        <div>
          {MenuFlag == 3 &&
            Content &&
            Content.map((item, idx) => (
              <Link href={`${ROUTE.AUCTION}/${item.id}`} key={item.id}>
                <S.ContentBox>
                  <div>{item.id}</div>
                  <div>{item.title}</div>

                  {item.status == 1 || item.status == 2 ? (
                    <div>경매중</div>
                  ) : item.status == 3 ? (
                    <div>거래중</div>
                  ) : item.status == 4 || item.status == 5 ? (
                    <div>경매종료</div>
                  ) : (
                    <div>경매사고</div>
                  )}

                  <div>{item.createdAt.split('T')[0]}</div>
                </S.ContentBox>
              </Link>
            ))}
        </div>
      </S.UserBoard>
    </S.Layout>
  )
}

export default MyContainer
