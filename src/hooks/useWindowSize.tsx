import { useState, useEffect } from 'react';

function getWindowSize() {
  if (window.innerWidth > 768) {
    return 'l'
  }
  else if (window.innerWidth > 501 && window.innerWidth <= 768) {
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