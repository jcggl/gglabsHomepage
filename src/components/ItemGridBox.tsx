import React, { useContext } from 'react'
import 'styles/ItemGridBox.scss'
import { WindowSizeContext } from 'contexts/WindowSizeContext';

export default function ItemGridBox({ children }: any) {
  const windowSize = useContext(WindowSizeContext)

  // function boxLayout() {
  //   if (windowSize === 's') {
  //     return (
  //       <div className={String.raw`w-full grid gap-[clamp(20px,2.6vw,24px)] grid-flow-row`}
  //       >
  //         {children}
  //       </div>
  //     )
  //   }
  //   else {
  //     const leftItems = children.filter((ele: any, idx: number) => idx % 2 === 0)
  //     const rightItems = children.filter((ele: any, idx: number) => idx % 2 === 1)

  //     return (
  //       <div className='item-grid-box'
  //         style={styles}
  //       >
  //         <div className='grid-col left'>
  //           {leftItems}
  //         </div>
  //         <div className='grid-col right'>
  //           {rightItems}
  //         </div>
  //       </div>
  //     )
  //   }
  // }

  // return boxLayout()
  return (
    <div className={String.raw`w-full grid grid-cols-2 grid-flow-row gap-[clamp(20px,2.6vw,24px)] mt-[clamp(76px,11vw,145px)]
      tablet:grid-rows-6`}
    >
      {children}
    </div>
  )
}
