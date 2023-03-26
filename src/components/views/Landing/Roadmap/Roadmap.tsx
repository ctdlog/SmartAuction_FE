import * as S from './Roadmap.styled'

const Roadmap = () => {
  return (
    <S.Section>
      <S.RoadmapTitle>Our Roadmap</S.RoadmapTitle>
      <S.RoadmapBlockWrapper>
        <S.RoadmapBlock backgroundColor='#d0ebff'>
          <h1>2023 - Q1</h1>
          <ul>
            <li>BLK 토큰 런칭</li>
            <li>사전 회원가입 무료 토큰 배포 진행</li>
            <li>계약 매칭 서비스 핵심 기능 개발</li>
            <li>테스트넷 기반 클로즈 베타 1.0 오픈</li>
          </ul>
        </S.RoadmapBlock>
        <S.RoadmapBlock backgroundColor='#d3f9d8'>
          <h1>2023 - Q2</h1>
          <ul>
            <li>라이트하우스 월렛 출시</li>
            <li>사고처리 DAO 서비스 오픈</li>
            <li>속도 및 가스비 절감을 위한 Blockchain Lighthouse 자체 메인넷 적용</li>
            <li>테스트넷 기반 클로즈 베타 2.0 오픈</li>
          </ul>
        </S.RoadmapBlock>
        <S.RoadmapBlock backgroundColor='#fff3bf'>
          <h1>2023 - Q3</h1>
          <ul>
            <li>서비스 백서 작성</li>
            <li>테스트넷 게빈 클로즈 베타 1.0 & 2.0 고객요구사항 수립</li>
            <li>요구사항 기반 서비스 보완 및 개선 서비스 안정화</li>
            <li>서비스 정식 오픈</li>
          </ul>
        </S.RoadmapBlock>
        <S.RoadmapBlock backgroundColor='#ffe8cc'>
          <h1>2023 - Q4</h1>
          <ul>
            <li>실시간 매칭 서비스 적용</li>
            <li>서비스 기능 및 UI 개선</li>
            <li>서비스 정식 오픈 2.0</li>
          </ul>
        </S.RoadmapBlock>
      </S.RoadmapBlockWrapper>
    </S.Section>
  )
}

export default Roadmap
