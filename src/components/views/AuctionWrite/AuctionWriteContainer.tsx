import { useState } from 'react'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FieldErrors, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Layout from '@/components/common/Layout'
import Subtitle from '@/components/common/Subtitle'
import * as S from '@/components/views/AuctionWrite/AuctionWriteContainer.styled'
import ROUTE from '@/constants/route'
import { createAuction } from '@/services/api/auction'

const ToastUIEditor = dynamic(() => import('@/components/common/ToastUIEditor'), {
  ssr: false,
})

interface FormValues {
  title: string
  initPrice: number
  maxPrice: number
}

const AuctionWriteContainer = () => {
  const { register, handleSubmit, watch } = useForm<FormValues>()
  const { push } = useRouter()
  const [content, setContent] = useState('')

  const onSubmit = async ({ title, initPrice, maxPrice }: FormValues) => {
    if (!content) {
      toast.error('내용을 입력해주세요.')
      return
    }

    const { statusCode } = await createAuction({
      title,
      initPrice,
      maxPrice,
      description: content,
      ipfsUrl: '',
      expiredAt: '2023-04-28T13:00:31',
    })
    if (statusCode === 201) {
      toast.success('경매 등록이 완료되었습니다.')
      push(ROUTE.AUCTION)
    }

    if (statusCode === 400) {
      toast.error('경매 등록에 실패하였습니다.')
    }
  }

  const onError = ({ title, initPrice, maxPrice }: FieldErrors<FormValues>) => {
    if (title?.message) {
      toast.error(title.message)
      return
    }

    if (initPrice?.message) {
      toast.error(initPrice.message)
      return
    }

    if (maxPrice?.message) {
      toast.error(maxPrice.message)
    }
  }

  return (
    <Layout>
      <S.Container>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <S.ButtonWrapper>
            <Link href={ROUTE.AUCTION}>
              <S.GoBackButton>
                <i className='ri-arrow-left-line'></i>
              </S.GoBackButton>
            </Link>
            <S.WriteButton type='submit'>
              <i className='ri-pencil-line'></i>
              <span>
                <Subtitle size='2'>경매 등록</Subtitle>
              </span>
            </S.WriteButton>
          </S.ButtonWrapper>
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
                step='0.001'
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
                step='0.001'
                {...register('maxPrice', {
                  required: '즉시 낙찰가를 입력해주세요.',
                  validate: (value) =>
                    Number(value) > watch('initPrice') || '즉시 낙찰가는 판매 시작가보다 높아야 합니다.',
                })}
              />
            </label>
          </S.PriceWrapper>
          {/* <S.Input placeholder='경매 종료일을 입력해주세요.' /> */}
          <ToastUIEditor setContent={setContent} />
        </form>
      </S.Container>
    </Layout>
  )
}

export default AuctionWriteContainer
