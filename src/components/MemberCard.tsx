import React from 'react'
import LinkedIn from 'assets/LinkedIn.png'
import 'styles/MemberCard.scss'

export default function MemberCard({image, name, role, comment, contect}: any) {
  return (
    <div className='member-card'>
      <div className='card-header'>
        <img className='member-image' src={image} alt={name} draggable={false} />
        <h6 className='member-role'>{role}</h6>
      </div>
      <h5 className='member-name bold'>{name}</h5>
      <p className='member-comment'>{comment}</p>
      {
        contect
        &&
        <a className='member-contect' href={contect} target='_blank' rel="noreferrer">
            <img src={LinkedIn} alt={'contect ' + name } draggable={false} />
        </a>
      }
    </div>
  )
}
