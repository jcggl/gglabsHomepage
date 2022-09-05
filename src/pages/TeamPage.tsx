import React from 'react'
import ItemFlexBox from 'components/ItemFlexBox'
import MemberCard from 'components/MemberCard'
import Members from 'services/Members'
import 'styles/TeamPage.scss'

export default function TeamPage() {
  return (
    <article className='team-container'>
      <div className='team-desc'>
        <h3 className='desc-title extrabold italic'>
          The Team
        </h3>
        <p className='desc-text light'>
          GoodGang Labs is made up of professionals with more than 10 years
          of experience in Metaverse, Community, Avatar, and AR/VR related
          projects in global top tier tech companies (Facebook, Naver, Line,
          Snow, and more). Currently, members live and work remotely in major
          global cities (San Francisco, Seoul, Hawaii, and Vancouver).
          Our products have a unique charm that blends with the various
          experiences of the members.
        </p>
      </div>
      <ItemFlexBox
        styles={{
          'marginTop': 'clamp(32px, 8.07vw, 88px)'
        }}
      >
        {Members.map((ele: any) => (
          <MemberCard {...ele} key={ele.name} />
        ))}
      </ItemFlexBox>
    </article>
  )
}
