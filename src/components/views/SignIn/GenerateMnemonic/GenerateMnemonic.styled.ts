import styled from '@emotion/styled'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`flex h-screen flex-col items-center justify-center gap-4 bg-background text-gray-100`}
`

const Block = styled.div`
  ${tw`flex flex-col items-center justify-center gap-4 rounded-xl bg-zinc-800 px-16 py-24`}
`

const Wrapper = styled.div`
  ${tw`flex items-center justify-center gap-4 rounded-lg border border-zinc-700 px-8 py-6`}
`

const ButtonWrapper = styled.div`
  ${tw`flex items-center justify-center gap-4`}

  button {
    ${tw`text-blue-500`}
  }
`

const Button = styled.button`
  ${tw`rounded-lg bg-blue-500 py-2 px-4 font-bold`}
`

export { Container, Block, Wrapper, ButtonWrapper, Button }
