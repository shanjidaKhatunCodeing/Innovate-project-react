import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import FotterList from '../FotterList'


const Fotter = () => {
  return (
    <div className='mt-[80px] mb-[50px]'>
        <Container>
            <Flex style='justify-between'>
                <div className='w-[40%]'>
                    <Image src={logo}/>
                    <Paragraph style="text-open text-lg text-paraColo pt-[45px] pr-[10px]" text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page."/>
                </div>
                <div className='w-[20%] ml-[40px]'>
                    <Heading style="text-open text-2xl font-semibold pb-[40px]" text="Features" as="h2"/>
                   <ul>
                    <FotterList link="#" text="Home"/>
                    <FotterList link="#" text="About"/>
                    <FotterList link="#" text="Benifit"/>
                    <FotterList link="#" text="Pricing"/>
                    <FotterList link="#" text="Blog"/>
                   </ul>
                </div>
                <div className='w-[20%] ml-[40px]'>
                    <Heading style="text-open text-2xl font-semibold pb-[40px]" text="Products" as="h2"/>
                   <ul>
                    <FotterList link="#" text="Task Management"/>
                    <FotterList link="#" text="Company Growth"/>
                    <FotterList link="#" text="Time Tracking"/>
                   </ul>
                </div>
                <div className='w-[20%] ml-[40px]'>
                    <Heading style="text-open text-2xl font-semibold pb-[40px]" text="Support" as="h2"/>
                   <ul>
                    <FotterList link="#" text="Customer Service"/>
                    <FotterList link="#" text="Accessibility"/>
                    <FotterList link="#" text="Contact Us"/>
                   </ul>
                </div>
            </Flex>
            <div className='mt-[200px]'>
                <Flex style='justify-between'>
                <div className='w-90%'>
                    <Paragraph style="font-sans text-lg text-paraColo" text="@20201 Innovate.All rights reserved."/>
                </div>
                <div className='w-5%'>
                <Paragraph style="font-sans text-lg text-paraColo" text="Privacy policy"/>
                </div>
                <div className='w-5%'>
                <Paragraph style="font-sans text-lg text-paraColo" text="Terms & condition"/>
                </div>
                </Flex>
            </div>
        </Container>
    </div>
  )
}

export default Fotter