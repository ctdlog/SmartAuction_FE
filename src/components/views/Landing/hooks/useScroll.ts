import { useEffect, useRef, useState } from 'react'

const useScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrollDisabled, setIsScrollDisabled] = useState(false)
  const SCROLL_DISABLED_TIMEOUT = 1000

  const calculateDeltaY = (event: WheelEvent | TouchEvent): number => {
    return 'deltaY' in event ? event.deltaY : event.touches[1].clientY - event.touches[0].clientY
  }

  const calculateNextPageTop = (scrollTop: number, pageHeight: number, deltaY: number): number => {
    const isScrollingDown = deltaY > 0
    const scrollDirection = isScrollingDown ? 1 : -1
    return pageHeight * (Math.floor(scrollTop / pageHeight) + scrollDirection)
  }

  useEffect(() => {
    const handleScroll = (e: WheelEvent | TouchEvent) => {
      e.preventDefault()
      if (isScrollDisabled) {
        return
      }

      const { scrollTop } = containerRef.current as HTMLDivElement
      const pageHeight = window.innerHeight
      const deltaY = calculateDeltaY(e)
      const nextPageTop = calculateNextPageTop(scrollTop, pageHeight, deltaY)

      containerRef.current?.scrollTo({
        top: nextPageTop,
        behavior: 'smooth',
      })

      setIsScrollDisabled(true)
      setTimeout(() => setIsScrollDisabled(false), SCROLL_DISABLED_TIMEOUT)
    }

    const scrollDivCurrent = containerRef.current

    if (!scrollDivCurrent) {
      throw new Error('containerRef가 존재하지 않습니다.')
    }

    scrollDivCurrent.addEventListener('wheel', handleScroll, { passive: false })
    // scrollDivCurrent.addEventListener('touchstart', handleScroll, { passive: false });
    // scrollDivCurrent.addEventListener('touchmove', handleScroll, { passive: false });
    return () => {
      scrollDivCurrent.removeEventListener('wheel', handleScroll)
      // scrollDivCurrent.removeEventListener('touchstart', handleScroll);
      // scrollDivCurrent.removeEventListener('touchmove', handleScroll);
    }
  }, [isScrollDisabled])

  return { containerRef }
}

export default useScroll
