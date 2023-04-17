import { useContext } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { FieldErrors, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Subtitle from '@/components/common/Subtitle'
import { signature } from '@/services/api/wallet'

import { ModalContext } from '../AuctionDetailContainer.context'

import * as S from './SignatureModal.styled'

interface FormValues {
  publicKey: string
  password: string
}

interface Props {
  writerEoa: string
}

const SignatureModal = ({ writerEoa }: Props) => {
  const { id } = useRouter().query
  const queryClient = useQueryClient()
  const {
    register,
    handleSubmit,
    watch,
    formState: { isLoading },
  } = useForm<FormValues>()
  const { setModal } = useContext(ModalContext)

  const { mutate } = useMutation(() => signature(Number(id), writerEoa, watch('password')), {
    onSuccess: () => {
      toast.success('서명에 성공했습니다.')
      queryClient.invalidateQueries(['auction', id])
      setModal(null)
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
        return
      }

      toast.error('서명에 실패했습니다.')
    },
  })

  const onSumbit = () => {
    mutate()
  }

  const onError = ({ publicKey, password }: FieldErrors<FormValues>) => {
    if (publicKey) {
      toast.error(publicKey.message)
      return
    }

    if (password) {
      toast.error(password.message)
    }
  }

  return (
    <S.Modal>
      <S.ModalWrapper>
        <i className='ri-close-line' onClick={() => setModal(null)} />
        <S.ModalForm onSubmit={handleSubmit(onSumbit, onError)}>
          <label>
            <Subtitle size='4'>출금자 </Subtitle>
            <S.ModalInput
              type='text'
              placeholder='Public Key를 입력해주세요.'
              {...register('publicKey', {
                required: 'Public Key를 입력해주세요.',
              })}
              value={writerEoa}
              readOnly
            />
          </label>
          <label>
            <Subtitle size='4'>비밀번호</Subtitle>
            <S.ModalInput
              type='password'
              placeholder='비밀번호를 입력해주세요.'
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
              })}
            />
          </label>
          <S.ModalButton type='submit' disabled={isLoading}>
            서명하기
          </S.ModalButton>
        </S.ModalForm>
      </S.ModalWrapper>
    </S.Modal>
  )
}

export default SignatureModal
