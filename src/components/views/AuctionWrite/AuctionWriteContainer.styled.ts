import styled from '@emotion/styled'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`flex h-full w-full flex-col items-center justify-center gap-4 py-12 text-gray-100`}
`

const ButtonWrapper = styled.div`
  ${tw`mb-6 flex items-center justify-between`}
  width: 715px;
`

const GoBackButton = styled.button`
  ${tw`text-2xl`}
`

const WriteButton = styled.button`
  ${tw`flex items-center gap-2 rounded-md bg-zinc-800 px-4 py-2 text-2xl`}
`

const TitleInput = styled.input`
  ${tw`mb-6 h-16 w-full rounded-md bg-zinc-800 px-4 text-2xl`}
`

const PriceWrapper = styled.div`
  ${tw`mb-6 flex flex-col gap-4`}

  label {
    ${tw`flex items-center gap-4 text-2xl`}
  }
`

const Input = styled.input`
  ${tw`mb-2 h-12 w-1/2 rounded-md bg-zinc-800 px-4 text-xl`}

  &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export { Container, GoBackButton, WriteButton, ButtonWrapper, TitleInput, PriceWrapper, Input }
