import * as S from './Event.styled'

const Event = () => {
  return (
    <S.Section>
      <S.Title>
        We are a company that has <br />
        created a DevOps platform <br />
        for sofrware innovation.
      </S.Title>
      <S.BlockWrapper>
        <S.Block>
          <S.IconWrapper>
            <i className='ri-group-line'></i>
          </S.IconWrapper>
          <h1>Collaboration</h1>
          <p>
            Help is a priority. even if it&apos;s not <br />
            directly related to the goals <br />
            you&apos;re trying to archieve.
          </p>
        </S.Block>
        <S.Block>
          <S.IconWrapper>
            <i className='ri-lock-2-line'></i>
          </S.IconWrapper>
          <h1>Security</h1>
          <p>
            Manage your work with built-in <br />
            agile features. We update them <br />
            regularly.
          </p>
        </S.Block>
        <S.Block>
          <S.IconWrapper>
            <i className='ri-line-chart-line'></i>
          </S.IconWrapper>
          <h1>Analytics</h1>
          <p>
            View reports and analytics <br />
            of your team&apos;s work. It helps <br />
            to do the work more efficiently.
          </p>
        </S.Block>
      </S.BlockWrapper>
    </S.Section>
  )
}

export default Event
