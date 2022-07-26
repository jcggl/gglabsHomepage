import { useState, useEffect } from 'react';

function getWindowSize() {
  if (window.innerWidth > 768) {
    console.log('l')
    return 'l'
  }
  else if (window.innerWidth > 360 && window.innerWidth <= 768) {
    console.log('m')
    return 'm'
  }
  else {
    console.log('s')
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