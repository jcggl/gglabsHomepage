import React, { useContext } from 'react'
import ItemGridBox from 'components/ItemGridBox'
import ProjectCard from 'components/ProjectCard'
import Avatar from 'assets/Avatar.png'
import Communication from 'assets/Communication.png'
import Camera from 'assets/Camera.png'
import 'styles/ProjectPage.scss'
import { WindowSizeContext } from 'contexts/WindowSizeContext'

export default function ProjectPage() {
  const windowSize = useContext(WindowSizeContext)

  const disableButtonAttrs = {
    'text': 'Coming soon',
    'classes': 'light',
    'styles': {
      'fontSize': 'clamp(14px, 1.8vw, 16px)',
      'padding': '6px 18px'
    },
    'disabled': true
  }

  const getGridTemplateColumns = () => {
    if (windowSize === 's') {
      return '100%'
    }
    else {
      return '1fr 1fr'
    }
  }

  return (
    <article className='project-container'>
      <div className='project-desc'>
        <h3 className={'desc-title extrabold italic'}>
          Project
        </h3>
        <h5 className={'desc-sub-title bold'}>
          We want to help you transverse between virtual space and the real world.
        </h5>
        <p className='desc-text'>
          In reality, it is not easy to express my true identity due to various
          restrictions such as social customs, ego, and social status. Through
          Beergang, you can allow yourself to really be who you are in the Metaverse.
          From GangHouse, you can genuinely communicate with people of various interests
          with your true identity. In return, you can also bring your virtual identity
          back to the real world with ARGang, an Augmented Reality camera to help people
          express their true identities with Beergang avatars and share special moments
          with the world.
        </p>
      </div>
      <ItemGridBox
        styles={{
          'marginTop': 'clamp(36px, 9vw, 81px)',
          'gridTemplateColumns': getGridTemplateColumns()
        }}
      >
        <ProjectCard
          cardAttr={{
            'image': Avatar,
            'title': 'Avatar',
            'text': 'Emotionally interactive full-body 3D avatars.'
          }}
          buttonAttr={disableButtonAttrs}
        />
        <ProjectCard
          cardAttr={{
            'image': Communication,
            'title': 'Communication',
            'text': 'An avatar based communication platform on Metaverse (equivalent to the metaverse version of Zoom).',
            'styles': {
              'margin': 'auto 0'
            }
          }}
          buttonAttr={disableButtonAttrs}
        />
        <ProjectCard
          cardAttr={{
            'image': Camera,
            'title': 'Camera',
            'text': 'An Augmented Reality camera to help people express their true identities with Beergang avatars and share special moments with the world.'
          }}
          buttonAttr={disableButtonAttrs}
        />
      </ItemGridBox>
    </article>
  )
}
