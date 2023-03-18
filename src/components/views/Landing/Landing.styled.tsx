import styled from '@emotion/styled'
import tw from 'twin.macro'

const Layout = styled.div`
  ${tw`flex min-h-screen flex-col`}
`

const Main = styled.main`
  ${tw`mt-24 flex-1`}
`

export { Layout, Main }
