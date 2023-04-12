import { useState, useEffect } from 'react'
import { getUserInfo, myFavoriteAuctions } from '@/services/api/user'
import * as S from './My.styled'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getBiddedAuctionApi, getMyAuction } from '@/services/api/auction'
import { Auction } from '@/services/api/auction/types'

const MyContainer = () => {
  const [MenuFlag, setMenuFlag] = useState(0)
  const [MyAuction, setMyAuction] = useState<Auction[]>([])
  const [MyFavorite, setMyFavorite] = useState<Auction[]>([])
  const [Bidded, setBidded] = useState<Auction[]>([])

  const { data: user } = useQuery(['user'], () => getUserInfo(), {
    select: (data) => data.payload,
  })

  // 관심목록
  const getMyFavorite = async () => {
    if (user) {
      const result = await myFavoriteAuctions()
      setMyFavorite(result.payload.auctions)
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
      setMyAuction(result.payload.auctions)
      setMenuFlag(2)
    } else {
      console.log(`유저없음_에러처리`)
    }
    console.log(MyAuction)
  }

  // 입찰목록
  const getBiddedAuction = async () => {
    if (user) {
      const result = await getBiddedAuctionApi(user.id, 0, 0)
      console.log(result)
      setBidded(result.payload.auctions)
      setMenuFlag(3)
    } else {
      console.log(`유저없음_에러처리`)
    }
  }

  return (
    <S.Layout>
      {/* <button onClick={test}>tt</button> */}

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
            MyFavorite &&
            MyFavorite.map((item, idx) => (
              <div key={idx}>
                <div>{item.id}</div>
                <div>{item.title}</div>
              </div>
            ))}
        </div>

        {/* 여기 컨텐츠 (My Auction) */}
        <div>
          {MenuFlag == 2 &&
            MyAuction &&
            MyAuction.map((item, idx) => (
              <div key={idx}>
                <div>{item.id}</div>
                <div>{item.title}</div>
              </div>
            ))}
        </div>

        {/* 여기 컨텐츠 (Bidded) */}
        <div>
          {MenuFlag == 3 &&
            MyAuction &&
            Bidded.map((item, idx) => (
              <div key={idx}>
                <div>{item.id}</div>
                <div>{item.title}</div>
              </div>
            ))}
        </div>
      </S.UserBoard>
    </S.Layout>
  )
}

export default MyContainer
