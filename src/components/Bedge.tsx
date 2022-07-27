import React from 'react'
import 'styles/Bedge.scss'

export default function Bedge({image, text}: any) {
  return (
    <div className='bedge-container'>
      <img className='bedge-image' src={image} alt={text} />
      <p className='bedge-text'>{text}</p>
    </div>
  )
}
