import styled from '@emotion/styled'
import tw from 'twin.macro'

const Section = styled.section`
  ${tw`flex h-screen items-center justify-between bg-black px-36`}
`

const Block = styled.div`
  ${tw`flex flex-col items-start`}
  font-family: 'Poppins';

  h1 {
    ${tw`font-extrabold text-6xl text-stone-100`}
    font-family: "Poppins";
  }

  strong {
    ${tw`text-7xl`}
    font-weight: bold;
    background: linear-gradient(to right, #78cccf 26%, #5542cf 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 6px;
  }

  p {
    ${tw`mt-4 text-lg text-stone-600`}
  }

  button {
    ${tw`mt-16 rounded-3xl bg-gray-100 px-12 py-4 font-bold text-lg text-stone-900`}
  }
`

const ImageWrapper = styled.div`
  img {
    ${tw`rounded-lg`}
  }
`

export { Section, Block, ImageWrapper }
