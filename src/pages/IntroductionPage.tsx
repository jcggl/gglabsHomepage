import React from 'react'
import ItemGridBox from 'components/ItemGridBox'
import ItemCard from 'components/ItemCard'
import GlobalBtn from 'components/GlobalBtn';

export default function IntroductionPage() {

  return (
    <article className={String.raw`w-full max-w-[1200px] flex flex-col justify-center items-center text-white mt-[clamp(64px,15vw,194px)] px-4 box-border`}>
      <div className={String.raw`flex flex-col items-center`}>
        <h2 className={String.raw`text-[clamp(48px,10vw,122px)] font-extrabold italic leading-[clamp(54px,110%,132px)] mb-[clamp(20px,5vw,32px)] text-center`}>
          GOOD GANG
        </h2>
        <p className={'desc text-center'}>
          To change the world, you sometimes have to take the lead with a leap of faith.<br/>
          We hope to make the world a better place in our own experimental and humorous way.<br/>
          In our own GoodGang manner!
        </p>
      </div>
      <ItemGridBox classes={'mt-[clamp(76px,11vw,145px)] desktop:grid-cols-[40fr,60fr]'}>
        <ItemCard
          classes={'text-white text-[clamp(24px,3.65vw,50px)] leading-[150%] font-light italic p-0'}
        >
          <p>
            Are you ready to be a part of our GoodGang Community?
          </p>
        </ItemCard>
        <ItemCard
          classes={'text-white text-[clamp(18px,2.86vw,30px)] leading-[clamp(26px,155%,51px)] bg-[#6038FF] font-light tablet:mt-[clamp(0px,calc(100%-500px),177px)]'}
        >
          <GlobalBtn
            text={'Mission'}
            classes={'text-[clamp(14px,2.86vw,24px)] font-extrabold mb-[clamp(16px,3vw,24px)]'}
          />
          <p>
            Make the world a better place by helping people express their true identities and use their passion and talents to generate legitimate revenue in a fun way..
          </p>
        </ItemCard>
        <ItemCard
          classes={'text-black text-[clamp(22px,3vw,34px)] leading-[clamp(33px,165%,50px)] font-extrabold bg-[#84FB72] pt-[clamp(63px,10vw,130px)] mt-[clamp(30px,4.5vw,50px)]'}
        >
          <p className={String.raw`absolute top-[-10%] left-[5%] text-[clamp(60px,9vw,100px)]`}
          >
            🔥
          </p>
          <p>
            Build a metaverse with avatar based communicational platform.
          </p>
        </ItemCard>
        <ItemCard
          classes={String.raw`h-[clamp(155px,20vw,334px)] bg-[url("assets/strap-img.png")] bg-cover`}
        />
      </ItemGridBox>
    </article>
  )
}
