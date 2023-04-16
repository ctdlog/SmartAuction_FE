import { useEffect, useState } from 'react'

import { io } from 'socket.io-client'

import * as S from '@/components/views/AuctionDetail/Chat/Chat.styled'
import { getApiEndpoint } from '@/envs'

const socket = io(getApiEndpoint())

const Chat = () => {
  const [message, setMessage] = useState('')
  const [roomId, setRoomId] = useState('')

  const handleSubmit = () => {
    socket.emit('message', {
      message,
      roomId,
    })
    setMessage('')
  }

  const exitRoom = () => {
    socket.emit('exit', {
      roomId,
    })
  }

  useEffect(() => {
    const joinRoom = () => {
      socket.emit('join', {
        roomId,
        userId: 'test',
      })

      socket.on('setNickname', (nickname) => {
        socket.nickname = nickname
      })

      socket.on('chat', (message) => {
        const userNickname = socket.nickname
      })
    }

    joinRoom()
  }, [roomId])

  return (
    <S.Container>
      <h1>My Nickname</h1>
      <input type='text' value={message} onChange={(e) => setMessage(e.currentTarget.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <hr />
      <div>
        <input type='text' value={roomId} onChange={(e) => setRoomId(e.currentTarget.value)} />
        <button onClick={exitRoom}>나가기</button>
        <h2>Chats</h2>
        <div></div>
      </div>
    </S.Container>
  )
}

export default Chat
