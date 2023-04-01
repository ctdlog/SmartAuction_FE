import styled from '@emotion/styled'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`flex h-screen flex-col items-center justify-center gap-4`}
`

const Wrapper = styled.div`
  ${tw`flex items-center justify-center gap-4 rounded-lg border border-gray-300 px-8 py-6 shadow-lg`}
`

const Button = styled.button`
  ${tw`rounded-lg bg-blue-500 px-4 py-2 text-white`}
`

export { Container, Wrapper, Button }
