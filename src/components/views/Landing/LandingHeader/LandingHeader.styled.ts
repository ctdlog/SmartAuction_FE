import styled from '@emotion/styled'
import Link from 'next/link'
import tw from 'twin.macro'

export const Header = styled.header`
  ${tw`fixed flex h-24 w-full items-center justify-between bg-black px-12 py-4 font-bold text-stone-100 text-lg`}
  font-family: 'Poppins';

  ul {
    ${tw`flex items-center gap-8`}

    li {
      cursor: pointer;
    }
  }
`

export const Nav = styled.div`
  ${tw`flex self-center`}
`
export const StyledLink = styled(Link)`
  ${tw`flex items-center justify-center gap-2 rounded-md bg-zinc-800 py-2 px-4`}

  span {
    ${tw`pt-0.5`}
  }
`
