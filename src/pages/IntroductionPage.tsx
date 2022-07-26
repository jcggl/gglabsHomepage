import React from 'react'
import ItemBox from 'components/ItemBox'
import ItemCard from 'components/ItemCard'
import GlobalBtn from 'components/GlobalBtn';
import StrapImg from 'assets/strap-img.png'
import 'style/IntroductionPage.scss'

export default function introPage() {
  return (
    <article className='intro-container'>
      <div className='intro-desc'>
        <h2 className={'intro-title extrabold italic'}>GOODGANG</h2>
        <p className={'intro-text light'}>
          To change the world, you sometimes have to take the lead with a leap of faith.<br/>
          We hope to make the world a better place in our own experimental and humorous way.<br/>
          In our own GoodGang manner!
        </p>
      </div>
      <ItemBox>
        <ItemCard
          classes={'light italic'}
          styles={{
            'width': '486px',
            'color': '#ffffff',
            'fontSize': '50px',
            'padding': 0
          }}
        >
          <p>
            Are you ready to be a part of our GoodGang Community?
          </p>
        </ItemCard>
        <ItemCard
          classes={'light'}
          styles={{
            'width': '690px',
            'color': '#ffffff',
            'fontSize': '30px',
            'backgroundColor': '#6038FF'
          }}
        >
          <GlobalBtn
            text={'Mission'}
            classes={'extrabold'}
            styles={{
              'color': '#ffffff',
              'borderColor': '#ffffff',
              'fontSize': '24px'
            }}
          />
          <p>
            Make the world a better place by helping people express their true identities and use their passion and talents to generate legitimate revenue in a fun way..
          </p>
        </ItemCard>
        <ItemCard
          classes={'extrabold'}
          styles={{
            'width': '486px',
            'color': '#000000',
            'fontSize': '34px',
            'backgroundColor': '#84FB72'
          }}
        >
          <p>
            Build a metaverse avatar communication platform
          </p>
        </ItemCard>
        <ItemCard
          styles={{
            'width': '690px',
            'backgroundImage': `url(${StrapImg})`,
            'backgroundSize': 'cover'
          }}
        />
      </ItemBox>
    </article>
  )
}
