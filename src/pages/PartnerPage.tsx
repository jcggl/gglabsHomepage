import Bedge from 'components/Bedge'
import ItemFlexBox from 'components/ItemFlexBox'
import React from 'react'
import {companies, people} from 'services/Partners'
import 'styles/PartnerPage.scss'

export default function PartnerPage() {
  return (
    <article className={String.raw`w-full max-w-[1200px] mt-[clamp(120px,16vw,250px)] flex flex-col items-center px-4 box-border`}>
      <div className={String.raw`w-full flex flex-col items-start`}>
        <h3 className={String.raw`title`}>
          Our Partners
        </h3>
        <p className={String.raw`desc`}>
          Our investors trust in our value and vision. They believe in our work.
        </p>
      </div>
      <ItemFlexBox
        classes={'mt-[clamp(20px,5.73vw,96px)]'}
      >
        {companies.map((ele: any, idx: number) => 
          <div className={String.raw`w-[40%]  h-[clamp(90px,14.8vw,226px)] flex justify-center mb-[min(34px,10vw)] pb-[clamp(9px,1.48vw,22.6px)] box-border
            tablet:w-[min(30%,378px)] tablet:mb-[clamp(34px,5.2vw,80px)]`}
            key={idx}>
            <img className={String.raw`h-full`}
              src={ele} alt={`company-${idx}`} />
          </div>
        )}
        {people.map((ele: any) => 
          <Bedge {...ele} key={ele.text} />
        )}
      </ItemFlexBox>
    </article>
  )
}
