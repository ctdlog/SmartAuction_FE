import { useContext } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { FieldErrors, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Subtitle from '@/components/common/Subtitle'
import { withdrawBySeller } from '@/services/api/auction'
import { signature } from '@/services/api/wallet'

import { ModalContext } from '../AuctionDetailContainer.context'

import * as S from './WithdrawModal.styled'

interface FormValues {
  password: string
}

const BidModal = () => {
  const { id } = useRouter().query
  const queryClient = useQueryClient()
  const {
    register,
    handleSubmit,
    watch,
    formState: { isLoading },
  } = useForm<FormValues>()
  const { setModal } = useContext(ModalContext)

  const { mutate } = useMutation(() => withdrawBySeller(Number(id), watch('password')), {
    onSuccess: () => {
      toast.success('출금에 성공했습니다.')
      queryClient.invalidateQueries(['auction', id])
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
        return
      }

      toast.error('출금에 실패했습니다.')
    },
  })

  const onSumbit = () => {
    mutate()
  }

  const onError = ({ password }: FieldErrors<FormValues>) => {
    toast.error(password?.message)
  }

  return (
    <S.Modal>
      <S.ModalWrapper>
        <i className='ri-close-line' onClick={() => setModal(null)} />
        <S.ModalForm onSubmit={handleSubmit(onSumbit, onError)}>
          <label>
            <Subtitle size='4'>비밀번호</Subtitle>
            <S.ModalInput
              type='password'
              placeholder='비밀번호를 입력해주세요.'
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
              })}
            />
            <span>출금 진행을 위해 비밀번호를 입력해주세요.</span>
          </label>
          <S.ModalButton type='submit' disabled={isLoading}>
            출금하기
          </S.ModalButton>
        </S.ModalForm>
      </S.ModalWrapper>
    </S.Modal>
  )
}

export default BidModal
