import React from 'react'
import GlobalBtn from './GlobalBtn'
import 'styles/ProjectCard.scss'

export default function ProjectCard({cardAttr, buttonAttr}: any) {
  return (
    <div className='project-card' style={cardAttr.styles}>
      <img className='card-image' src={cardAttr.image} alt={cardAttr.title} />
      <div className='card-header'>
        <h5 className='card-title bold'>
          {cardAttr.title}
        </h5>
        <GlobalBtn
          text={buttonAttr.text}
          classes={buttonAttr.classes}
          styles={buttonAttr.styles}
          disabled={buttonAttr.disabled}
        />
      </div>
      <p className='card-text light'>
        {cardAttr.text}
      </p>
    </div>
  )
}
