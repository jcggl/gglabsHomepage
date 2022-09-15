import React, { useContext } from 'react'
import ItemGridBox from 'components/ItemGridBox'
import ItemCard from 'components/ItemCard'
import GlobalBtn from 'components/GlobalBtn';
import StrapImg from 'assets/strap-img.png'
import 'styles/IntroductionPage.scss'
import { WindowSizeContext } from 'contexts/WindowSizeContext';

export default function IntroductionPage() {
  const windowSize = useContext(WindowSizeContext)

  const getGridTemplateColumns = () => {
    if (windowSize === 's') {
      return '100%'
    }
    else if (windowSize === 'm') {
      return '1fr 1fr'
    }
    else {
      return '40% 60%'
    }
  }

  return (
    <article className={String.raw`w-full max-w-[1200px] flex flex-col justify-center items-center text-white mt-[clamp(64px,15vw,194px)] px-4 box-border`}>
      <div className={String.raw`flex flex-col items-center`}>
        <h2 className={String.raw`text-[clamp(48px,10vw,122px)] font-extrabold italic leading-[clamp(54px,110%,132px)] mb-[clamp(20px,5vw,32px)] text-center`}>
          GOOD GANG
        </h2>
        <p className={String.raw`w-full text-[#a1a1a1] text-[clamp(14px,2vw,24px)] leading-[185%] break-words text-center`}>
          To change the world, you sometimes have to take the lead with a leap of faith.<br/>
          We hope to make the world a better place in our own experimental and humorous way.<br/>
          In our own GoodGang manner!
        </p>
      </div>
      <ItemGridBox>
        <ItemCard
          classes={'light italic'}
          styles={{
            'color': '#ffffff',
            'fontSize': 'clamp(24px, 3.65vw, 50px)',
            'lineHeight': '150%',
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
            'color': '#ffffff',
            'backgroundColor': '#6038FF',
            'fontSize': 'clamp(18px, 2.86vw, 30px)',
            'lineHeight': 'clamp(26px, 155%, 51px)'
          }}
        >
          <GlobalBtn
            text={'Mission'}
            classes={'extrabold'}
            styles={{
              'fontSize': 'clamp(14px, 2.86vw, 24px)',
              'marginBottom': 'clamp(16px, 3vw, 24px)'
            }}
          />
          <p>
            Make the world a better place by helping people express their true identities and use their passion and talents to generate legitimate revenue in a fun way..
          </p>
        </ItemCard>
        <ItemCard
          classes={'extrabold'}
          styles={{
            'color': '#000000',
            'backgroundColor': '#84FB72',
            'fontSize': 'clamp(22px, 3vw, 34px)',
            'lineHeight': 'clamp(33px, 165%, 50px)',
            'paddingTop': 'clamp(63px, 10vw, 130px)',
            'marginTop': 'calc(clamp(60px, 9vw, 100px) / 2)'
          }}
        >
          <p className='fire-imogy'
            style={{
              'position': 'absolute',
              'top': '-10%',
              'left': '5%',
              'fontSize': 'clamp(60px, 9vw, 100px)'
            }}
          >
            🔥
          </p>
          <p>
            Build a metaverse avatar communication platform
          </p>
        </ItemCard>
        <ItemCard
          styles={{
            'height': 'clamp(155px, 20vw,334px)',
            'backgroundImage': `url(${StrapImg})`,
            'backgroundSize': 'cover'
          }}
        />
      </ItemGridBox>
    </article>
  )
}
