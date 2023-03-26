import tw, { styled } from 'twin.macro'

const Section = styled.section`
  ${tw`flex flex-col items-center justify-center bg-black px-24`}
`

const EventTitle = styled.h1`
  ${tw`mb-12 text-center text-7xl text-stone-300`}
  background: linear-gradient(to right, #78cccf 26%, #5542cf 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

const EventStep = styled.div`
  ${tw`mt-12 flex items-center justify-center gap-12`}

  .ri-arrow-right-s-line {
    ${tw`text-6xl text-stone-100`}
  }
`

const EventBlock = styled.div`
  ${tw`flex flex-col items-start gap-8 rounded-3xl border-stone-800 border border-solid p-12`}

  h1 {
    ${tw`font-bold text-4xl text-stone-100`}
  }

  p {
    ${tw`text-lg text-stone-300`}
  }

  button {
    ${tw`rounded-3xl bg-gray-100 px-12 py-4 font-bold text-lg text-stone-900`}
  }
`

const EventButton = styled.button`
  ${tw`mt-12 rounded-3xl bg-sky-700 px-12 py-4 text-stone-100`}
`

export { Section, EventTitle, EventStep, EventBlock, EventButton }
