import Subtitle from '@/components/common/Subtitle'

import * as S from './Event.styled'

const Event = () => {
  return (
    <S.Section>
      <S.EventTitle size='4'>Pre-signup event!</S.EventTitle>
      <Subtitle size='3'>
        지금 회원가입하고 이벤트에 참여해 500 BLK TOKEN을 가져자세요. 선착순 1,000명에게 총 500,000 BLK을 에어드랍
        해드려요.
      </Subtitle>
      <S.EventStep>
        <S.EventBlock>
          <h1>Step 1</h1>
          <p>우측 상단에 있는 회원가입 버튼을 눌러 회원가입을 완료해주세요.</p>
        </S.EventBlock>
        <i className='ri-arrow-right-s-line'></i>
        <S.EventBlock>
          <h1>Step 2</h1>
          <p>복사하기로 복사한 내용은 SNS에 올리고 링크를 복사하여 BLK 디스코드를 통해 공유해주세요.</p>
          <button>링크 복사하기</button>
        </S.EventBlock>
        <i className='ri-arrow-right-s-line'></i>
        <S.EventBlock>
          <h1>Step 3</h1>
          <p>24시간 내 활성화 되는 보상 수령하기 버튼을 통해 500 BLK TOKEN을 수령해주세요.</p>
        </S.EventBlock>
      </S.EventStep>
      <S.EventButton>이벤트 보상 수령하기 (500 BLK)</S.EventButton>
    </S.Section>
  )
}

export default Event
