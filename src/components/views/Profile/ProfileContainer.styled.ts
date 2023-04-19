import styled from '@emotion/styled'
import tw from 'twin.macro'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  margin: 1.5rem 0;
`

const Table = styled.div`
  border: 1px solid #111111;
  width: 50%;
`

const TableRow = styled.div`
  padding: 15px;
  line-height: 2;
  border-bottom: 0.1px solid gray;
`

const TableRow_Name = styled.div`
  font-weight: 600;
  /* background-color : blue; */
`

const UserBoard = styled.div`
  width: 50%;
`

const UserBoard_Menu = styled.div`
  display: flex;
  border: 1px solid gray;
  justify-content: space-around;
  font-size: 18px;
`

const UserBoard_Menu_Content = styled.div`
  user-select: none;
  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
`

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1px solid lightgray;
  padding-bottom: 2px;
  user-select: none;
  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
  & > div:nth-child(1) {
    width: 35px;
  }

  & > div:nth-child(2) {
    width: 200px;
  }

  & > div:nth-child(3) {
    width: 80px;
  }

  & > div:nth-child(4) {
    width: 82px;
  }
`

const ContentRow = styled.div``

export {
  Layout,
  Title,
  Table,
  TableRow,
  TableRow_Name,
  UserBoard,
  UserBoard_Menu,
  UserBoard_Menu_Content,
  ContentBox,
  ContentRow,
}
