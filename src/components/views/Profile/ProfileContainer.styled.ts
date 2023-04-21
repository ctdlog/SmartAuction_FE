import styled from '@emotion/styled'
import tw from 'twin.macro'

import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title/'

export const Layout = styled.div`
  ${tw`mb-24 flex h-full flex-col items-center justify-center text-gray-100`}
`

export const StyledTitle = styled(Title)`
  ${tw`my-12 text-3xl`}
`

export const Table = styled.div`
  ${tw`flex flex-col items-center justify-center gap-4`}
  width: 1000px;
`

export const TableRow = styled.div`
  ${tw`flex w-full items-center rounded-xl bg-zinc-800 p-8`}

  span {
    ${tw`text-lg`}
  }
`

export const TableRowName = styled(Subtitle)`
  ${tw`mr-4 w-24`}
`

export const PrivateKeyBlock = styled.div`
  ${tw`flex w-full items-center justify-between`}

  button {
    ${tw`rounded-md bg-blue-500 py-2 px-4 text-center text-xl`}
  }
`

export const UserBoard = styled.div`
  ${tw`w-1/2`}
`

export const UserBoardMenu = styled.div`
  ${tw`flex justify-around rounded-lg bg-zinc-800 p-4`}
`

export const UserBoardMenuContent = styled.button`
  ${tw`text-xl`}
`

export const ContentLayout = styled.div`
  ${tw`mt-4 mb-24 flex w-full flex-col rounded-lg bg-zinc-800 p-8`}
`

export const ContentHeader = styled.div`
  ${tw`grid items-center justify-between border-zinc-700 border-b pb-4`}
  grid-template-columns: 1fr 1fr 1fr 1fr;

  div {
    ${tw`text-lg`}
  }
`

export const ContentBox = styled.div`
  ${tw`grid items-center justify-between p-2`}
  grid-template-columns: 1fr 1fr 1fr 1fr;
`
