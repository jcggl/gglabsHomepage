import Bedge from 'components/Bedge'
import ItemFlexBox from 'components/ItemFlexBox'
import React from 'react'
import {companies, people} from 'services/Partners'
import 'styles/PartnerPage.scss'

export default function PartnerPage() {
  return (
    <article className='partner-container'>
      <div className='partner-desc'>
        <h3 className='desc-title extrabold italic'>
          Our Partners
        </h3>
        <p className='desc-text light'>
          Our investors trust in our value and vision. They believe in our work.
        </p>
      </div>
      <ItemFlexBox
        styles={{
          'marginTop': 'clamp(20px, 5.73vw, 96px)'
        }}
      >
        {companies.map((ele: any, idx: number) => 
          <div className='partner-image-container'>
            <img className='partner-image' src={ele} alt={`company-${idx}`} />
          </div>
        )}
        {people.map((ele: any) => 
          <Bedge {...ele} key={ele.text} />
        )}
      </ItemFlexBox>
    </article>
  )
}
