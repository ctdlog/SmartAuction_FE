import styled from '@emotion/styled'
import tw from 'twin.macro'

const Layout = styled.div`
  ${tw`flex flex-col`}
`

const ScrollBlock = styled.div`
  ${tw`mt-24 h-screen overflow-y-auto`}
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  section {
    ${tw`flex h-screen items-center justify-center`}

    h1 {
      ${tw`text-6xl text-white`}
    }
  }
`

export { Layout, ScrollBlock }
