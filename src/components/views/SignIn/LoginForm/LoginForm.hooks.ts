import { useState, useEffect, useCallback } from 'react'

export const useTimer = (startTime: number) => {
  const [timeLeft, setTimeLeft] = useState(0)
  const [timerStarted, setTimerStarted] = useState(false)
  const [timerEnded, setTimerEnded] = useState(true)

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  const startTimer = useCallback(() => {
    setTimeLeft(startTime)
    setTimerStarted(true)
    setTimerEnded(false)
  }, [startTime])

  useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (timerStarted && !timerEnded) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalId)
            setTimerEnded(true)
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [timerEnded, timerStarted])

  return { timeLeft: formatTime(timeLeft), timerEnded, startTimer }
}
