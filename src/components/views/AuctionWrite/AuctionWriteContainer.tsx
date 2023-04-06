import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import Subtitle from '@/components/common/Subtitle'
import * as S from '@/components/views/AuctionWrite/AuctionWriteContainer.styled'
import ROUTE from '@/constants/route'

const ToastUIEditor = dynamic(() => import('@/components/common/ToastUIEditor'), {
  ssr: false,
})

const AuctionWriteContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <S.Container>
      <S.ButtonWrapper>
        <Link href={ROUTE.AUCTION}>
          <S.GoBackButton>
            <i className='ri-arrow-left-line'></i>
          </S.GoBackButton>
        </Link>
        <S.WriteButton>
          <i className='ri-pencil-line'></i>
          <span>
            <Subtitle size='2'>경매 등록</Subtitle>
          </span>
        </S.WriteButton>
      </S.ButtonWrapper>
      <form>
        <S.TitleInput
          placeholder='제목을 입력해주세요.'
          {...register('title', {
            required: '제목을 입력해주세요.',
            maxLength: {
              value: 20,
              message: '제목은 20자 이내로 입력해주세요.',
            },
          })}
        />
        <S.PriceWrapper>
          <label>
            <span>판매 시작가</span>
            <S.Input
              placeholder='판매 시작가를 입력해주세요.'
              type='number'
              {...register('initPrice', {
                required: '판매 시작가를 입력해주세요.',
              })}
            />
          </label>
          <label>
            <span>즉시 낙찰가</span>
            <S.Input
              placeholder='즉시 낙찰가를 입력해주세요.'
              type='number'
              {...register('maxPrice', {
                required: '즉시 낙찰가를 입력해주세요.',
              })}
            />
          </label>
        </S.PriceWrapper>
        {/* <S.Input placeholder='경매 종료일을 입력해주세요.' /> */}
        <ToastUIEditor />
      </form>
    </S.Container>
  )
}

export default AuctionWriteContainer
