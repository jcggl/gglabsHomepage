import { useState, useEffect } from 'react';

function getWindowSize() {
  if (window.innerWidth > 1023) {
    return 'l'
  }
  else if (window.innerWidth > 768 && window.innerWidth <= 1023) {
    return 'm'
  }
  else {
    return 's'
  }
}

function useWindowSize() {
  const [size, setSize]: any = useState(getWindowSize())

  useEffect(() => {
    function resizeHandler() {
      setSize(getWindowSize())
    }
    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return size
}

export default useWindowSize