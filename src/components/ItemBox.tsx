import React from 'react'
import useWindowSize from 'hooks/useWindowSize';
import 'style/ItemBox.scss'

export default function ItemBox({ children }: any) {
  const size = useWindowSize()
  console.log(size)

  function boxLayout() {
    if (size === 's') {
      return (
        <div className='item-box'>
          {children}
        </div>
      )
    }
    else {
      const leftItems = children.filter((ele: any, idx: number) => idx % 2 === 0)
      const rightItems = children.filter((ele: any, idx: number) => idx % 2 === 1)

      return (
        <div className='item-box'
          style={{'gridTemplateColumns': '1fr 1fr'}}
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
