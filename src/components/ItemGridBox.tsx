import React, { useContext } from 'react'
import { WindowSizeContext } from 'contexts/WindowSizeContext';

export default function ItemGridBox({ children, classes }: any) {
  const windowSize = useContext(WindowSizeContext)

  function boxLayout() {
    if (windowSize === 's') {
      return (
        <div className={'item-grid-box ' + classes}
        >
          {children}
        </div>
      )
    }
    else {
      const leftItems = children.filter((ele: any, idx: number) => idx % 2 === 0)
      const rightItems = children.filter((ele: any, idx: number) => idx % 2 === 1)

      return (
        <div className={'item-grid-box ' + classes}
        >
          <div className='grid gap-[24px]'>
            {leftItems}
          </div>
          <div className='grid gap-[24px]'>
            {rightItems}
          </div>
        </div>
      )
    }
  }

  return boxLayout()
}
