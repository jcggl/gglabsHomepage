import React, { useContext } from 'react'
import 'styles/ItemGridBox.scss'
import { WindowSizeContext } from 'contexts/WindowSizeContext';

export default function ItemGridBox({ children, styles }: any) {
  const windowSize = useContext(WindowSizeContext)

  function boxLayout() {
    if (windowSize === 's') {
      return (
        <div className='item-grid-box'
          style={styles}
        >
          {children}
        </div>
      )
    }
    else {
      const leftItems = children.filter((ele: any, idx: number) => idx % 2 === 0)
      const rightItems = children.filter((ele: any, idx: number) => idx % 2 === 1)

      return (
        <div className='item-grid-box'
          style={styles}
        >
          <div className='grid-col left'>
            {leftItems}
          </div>
          <div className='grid-col right'>
            {rightItems}
          </div>
        </div>
      )
    }
  }

  return boxLayout()
}
