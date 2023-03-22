import styled from '@emotion/styled'
import tw from 'twin.macro'

const Header = styled.header`
  ${tw`fixed flex h-24 w-full items-center justify-between bg-slate-200 px-12 py-4 font-bold text-stone-900 text-lg`}
  font-family: 'Poppins';

  ul {
    ${tw`flex items-center gap-8`}
  }
`

const Nav = styled.div([tw`flex`])

const AuthWrapper = styled.div`
  ${tw`flex items-center gap-2`}
`

const Button = styled.button`
  ${tw`flex items-center gap-2 rounded-md bg-slate-400 px-4 py-2 text-sm text-stone-800`}
`

export { Header, Nav, AuthWrapper, Button }
