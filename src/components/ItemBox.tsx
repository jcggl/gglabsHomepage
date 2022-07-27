import React, { useContext } from 'react'
import 'style/ItemBox.scss'
import { WindowSizeContext } from 'contexts/WindowSizeContext';

export default function ItemBox({ children, styles }: any) {
  const windowSize = useContext(WindowSizeContext)

  function boxLayout() {
    if (windowSize === 's') {
      return (
        <div className='item-box'
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
        <div className='item-box'
          style={styles}
        >
          <div className='box-col left'>
            {leftItems}
          </div>
          <div className='box-col right'>
            {rightItems}
          </div>
        </div>
      )
    }
  }

  return boxLayout()
}
