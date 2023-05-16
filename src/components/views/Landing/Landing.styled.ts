import styled from '@emotion/styled'
import tw from 'twin.macro'

const Layout = styled.div`
  ${tw`flex flex-col text-stone-100`}
`

const ScrollBlock = styled.div`
  ${tw`mt-24 h-screen overflow-y-auto`}
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  section {
    ${tw`h-screen`}
  }
`

export { Layout, ScrollBlock }
