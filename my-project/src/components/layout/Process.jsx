import React from 'react'
import Container from '../Container'
import Image from '../Image'
import group from '../../assets/Group.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Flex from '../Flex'
import Card from '../Card'
import process from '../../assets/process.png'

const Process = () => {
  return (
    <div className='bg-processkBgColor py-[80px]'>
        <Container>
            <div className='text-center'>
                <Image style="inline-block" src={group}/>
                <Heading style="font-open text-[48px] font-bold pb-[20px]" text="Our creative process" as="h2"/>
                <Paragraph style="font-open text-lg text-paraColo" text="We provide digital experience services to startups"/>
                <Paragraph style="font-open text-lg text-paraColo pb-[50px]" text="and small businesses."/>
            </div>
            <div>
                    <Flex style='justify-between'>
                    <div className='w-[30%] h-[200px] bg-sCardBgColor py-[22px] pl-[20px] mr-[10%] mt-[70px] rounded-lg'>
                        <Card subStyle="font-open text-lg font-bold " subTitle="Step-1" title="Global SEO Research" style="font-open text-[30px] font-semibold" content="Practical tools and features make it easier to build and manage your site." className="text-rob text-lg text-paraColo pr-[30px]"/>
                    </div>

                    <div className='w-[60%]'>
                        <Image src={process}/>
                    </div>
                    </Flex>
            </div>
            <div className='my-[30px]'>
                    <Flex style='justify-between'>
                    <div className='w-[60%]'>
                        <Image src={process}/>
                    </div>

                    <div className='w-[30%] h-[200px] bg-sCardBgColor py-[22px] pl-[20px] mr-[10%] mt-[70px] rounded-lg'>
                        <Card subStyle="font-open text-lg font-bold " subTitle="Step-1" title="Global SEO Research" style="font-open text-[30px] font-semibold" content="Practical tools and features make it easier to build and manage your site." className="text-rob text-lg text-paraColo pr-[30px]"/>
                    </div>
                    </Flex>
            </div>
            <div>
                    <Flex style='justify-between'>
                    <div className='w-[30%] h-[200px] bg-sCardBgColor py-[22px] pl-[20px] mr-[10%] mt-[70px] rounded-lg'>
                        <Card subStyle="font-open text-lg font-bold " subTitle="Step-1" title="Global SEO Research" style="font-open text-[30px] font-semibold" content="Practical tools and features make it easier to build and manage your site." className="text-rob text-lg text-paraColo pr-[30px]"/>
                    </div>
                    <div className='w-[60%]'>
                        <Image src={process}/>
                    </div>
                    </Flex>
            </div>
        </Container>
    </div>
  )
}

export default Process