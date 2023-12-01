import React from 'react'
import Container from '../Container'
import Image from '../Image'
import group from '../../assets/Group.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Flex from '../Flex'
import Card from '../Card'
import services1 from '../../assets/services1.png'
import services2 from '../../assets/services2.png'
import services3 from '../../assets/services3.png'

const Service = () => {
  return (
    <div className='py-[80px]'>
        <Container>
            <div className='text-center'>
                <Image style="inline-block" src={group}/>
                <Heading style="font-open text-5xl font-bold" text="Our Services" as="h2"/>
                <Paragraph style="font-open text-lg text-paraColo leading-8 pt-[10px]" text="We have been providing great"/>
                <Paragraph style="font-open text-lg text-paraColo leading-8 pb[50px]" text="flooring solutions service."/>
            </div>
            <div className='py-[55px]'>
              <Flex style='justify-between'>
                  <div className='w-[30%] text-center bg-sCardBgColor rounded-lg shadow-md p-6 hover:bg-sCardHoverColor'>
                    <Card imgStyle="inline-block pb-[20px]" src={services1} title="Marketing Strategy" style="text-3xl font-bold mb-4 " content="Social Media has changed the way we interact & do business while creating" className="text-[23px] text-paraColo leading-8 pb[50px] font-bold mb-4" text="Read More" aStyle="text-lg font-semibold relative after:absolute after:h-[30px] after:w-[30px] after:bg-bannerColo after:rounded-r-full  after:left-[65px] z-10 after:-z-10"/>

                    
                  </div>
                  <div className='w-[30%] text-center bg-sCardBgColor rounded-lg shadow-md p-6 hover:bg-sCardHoverColor'>
                    <Card imgStyle="inline-block pb-[20px]" src={services2}     title="Social Marketing" style="text-3xl font-bold mb-4 " content="Social Media has changed the way we interact & do business while creating a new avenue." className="text-[23px] text-paraColo leading-8 pb[50px] font-bold mb-4" text="Read More" aStyle="text-lg font-semibold relative after:absolute after:h-[30px] after:w-[30px] after:bg-bannerColo after:rounded-r-full  after:left-[65px] z-10 after:-z-10"/>
                  </div>
  
                  <div className='w-[30%] text-center bg-sCardBgColor rounded-lg shadow-md p-6 hover:bg-sCardHoverColor'>
                    <Card imgStyle="inline-block pb-[20px]" src={services3} title="Content Marketing" style="text-3xl font-bold mb-4 " content="Content Marketing is the other fold of online advertisement. If you are looking to build" className="text-[23px] text-paraColo leading-8 pb[50px] font-bold mb-4" text="Read More" aStyle="text-lg font-semibold relative after:absolute after:h-[30px] after:w-[30px] after:bg-bannerColo after:rounded-r-full  after:left-[65px] z-10 after:-z-10"/>
                  </div>
              </Flex>
            </div>
        </Container>
    </div>
  )
}

export default Service