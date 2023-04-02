import styled from '@emotion/styled'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`flex h-screen flex-col items-center justify-center gap-4 bg-gray-200`}
`

const Block = styled.div`
  ${tw`flex flex-col items-center justify-center gap-4 rounded-xl bg-white px-16 py-24`}
`

const Wrapper = styled.div`
  ${tw`flex items-center justify-center gap-4 rounded-lg border border-gray-300 px-8 py-6`}
`

const ButtonWrapper = styled.div`
  ${tw`flex items-center justify-center gap-4`}

  button {
    ${tw`text-blue-500`}
  }
`

export { Container, Block, Wrapper, ButtonWrapper }
