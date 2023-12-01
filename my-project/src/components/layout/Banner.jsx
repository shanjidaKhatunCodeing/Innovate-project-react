import React from 'react'
import Flex from '../Flex'
import Image from '../Image'
import aniImg from '../../assets/3D Images.png'
import group from '../../assets/Group.png'
import Heading from '../Heading'
import Button from '../Button'
import Paragraph from '../Paragraph'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'

const Banner = () => {
  return (
    <div className='bg-bannerBg bg-cover bg-no-repeat bg-center py-[80px]'>
        <Flex style='justify-between'>
            <div className='w-1/4'>
                <Image style="pl-[40px]" src={aniImg}/>
            </div>
            <div className='w-1/2'>
                <Image src={group}/>
                <Heading style="font-open text-[60px] font-bold" text="We Are Digital #Marketing# Agency" as="h1"/>
                <Paragraph style="font-open text-xl text-paraColo leading-9 " text="Use customer data to build great and solid product"/>
                <Paragraph style="font-open text-xl text-paraColo leading-9 " text="experiences that convert. Digital marketing’s"/>
                <Paragraph style="font-open text-xl text-paraColo leading-9 " text="development has changed the way brands and "/>
                <Paragraph style="font-open text-xl text-paraColo leading-9 pb-[10px]" text="businesses use technology for marketing. "/>
                <Button style='font-open text-xl font-semibold py-[20px] px-[40px] border-2 rounded-full bg-bannerColo text-white' text='get Free Quoto'/>
            </div>
            <div className='w-1/4'>
                <div className='relative pr-[40px]'>
                    <Image src={banner1}/>
                    <Image style="absolute top-[200px] left-[-180px] " src={banner2}/>
                </div>
            </div>
        </Flex>
    </div>
  )
}

export default Banner