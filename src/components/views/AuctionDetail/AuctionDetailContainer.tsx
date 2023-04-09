import { useState } from 'react'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { FieldErrors, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Layout from '@/components/common/Layout/Layout'
import Subtitle from '@/components/common/Subtitle/Subtitle'
import { bidAuction, getAuctionBidders, getAuctionDetail } from '@/services/api/auction'

import * as S from './AuctionDetailContainer.styled'

interface FormValues {
  password: string
  bidPrice: number
}

const AuctionDetailContainer = () => {
  const { id } = useRouter().query
  const queryClient = useQueryClient()
  const { register, handleSubmit, watch } = useForm<FormValues>()
  const { data: auction } = useQuery(['auction', id], () => getAuctionDetail(Number(id)), {
    select: (data) => data.payload,
    enabled: !!id,
  })
  // TODO: remove as string
  const { data: bidders } = useQuery(['bidders', id], () => getAuctionBidders(auction?.contract as string), {
    select: (data) => data?.payload.bidders,
    enabled: !!auction?.contract,
  })

  const [isOpenPasswordInputModal, setIsOpenPasswordInputModal] = useState(false)

  const { mutate } = useMutation(() => bidAuction(Number(id), watch('password'), Number(watch('bidPrice'))), {
    onSuccess: () => {
      toast.success('입찰에 성공했습니다.')

      queryClient.invalidateQueries(['auction', id])
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
        return
      }

      toast.error('입찰에 실패했습니다.')
    },
  })

  const onSumbit = () => {
    mutate()
  }

  const onError = ({ bidPrice, password }: FieldErrors<FormValues>) => {
    if (bidPrice) {
      toast.error(bidPrice.message)
      return
    }

    if (password) {
      toast.error(password.message)
    }
  }

  const handleClick = () => {
    setIsOpenPasswordInputModal(true)
    mutate()
  }

  return (
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
        <div>
          <S.Menu>
            <S.MenuButtonWrapper>
              <Subtitle size='3'>입찰시작가: {auction?.initPrice}</Subtitle>
              <S.MenuButton
                onClick={() => {
                  setIsOpenPasswordInputModal(true)
                }}
              >
                입찰하기
              </S.MenuButton>
            </S.MenuButtonWrapper>
            <S.MenuButtonWrapper>
              <Subtitle size='3'>즉시낙찰가: {auction?.maxPrice}</Subtitle>
              <S.MenuButton>즉시 구매</S.MenuButton>
            </S.MenuButtonWrapper>
          </S.Menu>
          <S.BiddersBlock>
            <Subtitle size='4'>입찰기록</Subtitle>
            {bidders?.map((bidder) => (
              <S.BidderInformation key={bidder.biddedAt}>
                <span>{bidder.bidder}</span>
                <span>{bidder.price} MATIC</span>
                <span>{new Date(Number(bidder.biddedAt) * 1000).toLocaleDateString()}</span>
              </S.BidderInformation>
            ))}
          </S.BiddersBlock>
        </div>
      </S.Container>
      {isOpenPasswordInputModal && (
        <S.Modal>
          <S.ModalWrapper>
            <i
              className='ri-close-line'
              onClick={() => {
                setIsOpenPasswordInputModal(false)
              }}
            />
            <form onSubmit={handleSubmit(onSumbit, onError)}>
              <S.ModalInput
                type='number'
                placeholder='입찰가를 입력해주세요.'
                {...register('bidPrice', {
                  required: '입찰가를 입력해주세요.',
                  min: {
                    value: auction?.initPrice as number,
                    message: '입찰가는 시작가보다 높아야 합니다.',
                  },
                })}
              />
              <S.ModalInput
                type='password'
                placeholder='비밀번호를 입력해주세요.'
                {...register('password', {
                  required: '비밀번호를 입력해주세요.',
                })}
              />
            </form>
            <S.ModalButton onClick={handleClick}>입찰하기</S.ModalButton>
          </S.ModalWrapper>
        </S.Modal>
      )}
    </Layout>
  )
}

export default AuctionDetailContainer
