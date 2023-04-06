import styled from '@emotion/styled'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`flex h-full w-full flex-col items-center justify-center gap-4 py-12 text-gray-100`}

  h1 {
    ${tw`text-4xl`}
  }
`

export const Button = styled.button`
  ${tw`fixed top-8 right-8 flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-xl`}
`

export const AuctionWrapper = styled.div`
  ${tw`mt-12 grid w-full max-w-screen-2xl grid-cols-3 gap-8 rounded-md px-4 py-8 text-gray-100`}
`

export const AuctionBlock = styled.div`
  ${tw`flex w-full flex-col gap-4 rounded-lg border border-zinc-700`}

  img {
    ${tw`w-full rounded-t-lg`}
  }
`

export const Description = styled.div`
  ${tw`flex flex-col gap-4 p-4`}
`
