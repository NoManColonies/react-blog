import { useState, useEffect } from 'react'

interface IUseScroll {
  scrollRange?: number
}

function useScroll ({ scrollRange = 20 }: IUseScroll): boolean {
  const [isScroll, setScroll] = useState<boolean>(false)

  function handleScrollEvent () {
    if (window.scrollY > scrollRange) return setScroll(true)
    console.log('is scrolling', window.scrollY)

    return setScroll(false)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScrollEvent)
    return () => document.removeEventListener('scroll', handleScrollEvent)
  }, [handleScrollEvent])

  return isScroll
}

export default useScroll
