import tw, { styled } from 'twin.macro'

import Title from '@/components/common/Title'

const Section = styled.section`
  ${tw`flex flex-col items-center justify-center bg-black p-36`}
`

const RoadmapTitle = styled(Title)`
  ${tw`mb-12 text-7xl text-white`}
  font-family: 'Alkatra'
`

const RoadmapSubtitle = styled.h2`
  ${tw`mb-12 text-4xl text-white`}
`

const RoadmapBlockWrapper = styled.div`
  ${tw`grid gap-4 [grid-template-columns: repeat(2, 1fr)]`}
`

const RoadmapBlock = styled.div<{ backgroundColor: string }>`
  ${tw`flex h-full flex-col items-start rounded-lg border-stone-800 border border-solid p-12 text-black`}
  background-color: ${({ backgroundColor }) => backgroundColor};

  h1 {
    ${tw`mb-8 w-full border-gray-400 border-b-2 border-solid pb-4 text-4xl text-black`}
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
