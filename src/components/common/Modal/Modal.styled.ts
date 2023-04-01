import styled from '@emotion/styled'
import tw from 'twin.macro'

const Background = styled.div`
  ${tw`absolute top-0 left-0 z-50 h-full w-full bg-black bg-opacity-40`}
`

const Layout = styled.div`
  ${tw`absolute top-1/2 left-1/2 z-50 flex h-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border-gray-700 bg-white shadow-xl`}
`

export { Background, Layout }
