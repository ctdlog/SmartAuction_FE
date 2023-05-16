import tw, { styled } from 'twin.macro'

import Title from '@/components/common/Title'

const Section = styled.section`
  ${tw`flex flex-col items-center justify-center bg-black p-36`}
`

const RoadmapTitle = styled(Title)`
  ${tw`mb-12 text-7xl text-white`}
  font-family: 'Alkatra';
  background: linear-gradient(to right, #78cccf 26%, #5542cf 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Alkatra';
`

const RoadmapSubtitle = styled.h2`
  ${tw`mb-12 text-4xl text-white`}
`

const RoadmapBlockWrapper = styled.div`
  ${tw`grid gap-4 [grid-template-columns: repeat(2, 1fr)]`}
`

const RoadmapBlock = styled.div`
  ${tw`flex h-full flex-col items-start rounded-lg border-stone-800 border border-solid bg-black p-12 text-white`}

  h1 {
    ${tw`mb-8 w-full border-gray-500 border-b-2 border-solid pb-4 text-4xl text-white`}
    font-family: 'Alkatra'
  }

  ul {
    ${tw`ml-4 flex flex-col items-start`}

    li {
      ${tw`mb-2 list-disc`}
    }
  }
`

export { Section, RoadmapTitle, RoadmapSubtitle, RoadmapBlockWrapper, RoadmapBlock }
