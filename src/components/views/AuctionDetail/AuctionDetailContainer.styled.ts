import styled from '@emotion/styled'
import tw from 'twin.macro'

import Subtitle from '@/components/common/Subtitle/Subtitle'

export const Container = styled.div`
  ${tw`flex w-full justify-center gap-16 py-12 text-gray-100`}
`

export const Wrapper = styled.div`
  ${tw`flex w-1/2 flex-col`}
`

export const TitleWrapper = styled.div`
  ${tw`mb-2 flex items-end justify-between border-zinc-700 border-b pb-4`}
`

export const AuctionTitle = styled.h1`
  ${tw`text-4xl`}
`

export const Writer = styled(Subtitle)`
  ${tw`items-end text-zinc-400`}
`

export const Description = styled.div`
  ${tw`mt-4 flex h-full w-full rounded-lg border border-zinc-700 bg-zinc-800 p-4 font-bold text-gray-100 text-xl`}
  min-height: 768px;
`

export const WriterWrapper = styled.div`
  ${tw`flex justify-between`}
`

export const Menu = styled.div`
  ${tw`flex flex-col gap-4`}
`

export const MenuButtonWrapper = styled.div`
  ${tw`flex items-center gap-4`}
`

export const MenuButton = styled.button`
  ${tw`flex items-center gap-2 rounded-md bg-zinc-700 px-4 py-2 text-xl`}
`

export const Modal = styled.div`
  ${tw`fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50`}
`

export const ModalWrapper = styled.div`
  ${tw`flex w-96 flex-col gap-4 rounded-lg bg-zinc-800 p-8`}

  i {
    ${tw`self-end text-2xl text-gray-100`}
  }
`

export const ModalInput = styled.input`
  ${tw`mb-2 h-12 w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 text-xl text-gray-100`}
  &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const ModalButton = styled.button`
  ${tw`flex items-center justify-center gap-2 rounded-md bg-zinc-700 px-4 py-2 text-xl text-gray-100`}
`
