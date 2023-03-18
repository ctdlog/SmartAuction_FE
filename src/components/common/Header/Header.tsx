import Image from 'next/image'

import * as S from './Header.styled'

const Header = () => {
  return (
    <S.Header>
      <Image
        src={'https://blockchain-lighthouse.s3.ap-northeast-2.amazonaws.com/common/logo_rm.png'}
        width={125}
        height={100}
        alt='logo'
      />
      <S.Nav>
        <ul>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Event</a>
          </li>
          <li>
            <a href='#'>Roadmap</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </S.Nav>
      <S.AuthWrapper>
        <S.Button>
          <i className='ri-login-box-line'></i>
          <span>Sign In</span>
        </S.Button>
        <S.Button>
          <i className='ri-user-add-line'></i>
          <span>Sign Up</span>
        </S.Button>
      </S.AuthWrapper>
    </S.Header>
  )
}

export default Header
