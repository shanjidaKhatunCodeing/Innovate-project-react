
import React from 'react'
import Flex from '../Flex'
import Container from '../Container'
import Image from '../Image'
import group from '../../assets/Group.png'
import blog from '../../assets/blog.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Card from '../Card'



const Blog = () => {
  return (
    <div className='bg-blogBgColor py-[80px]'>
        <Container>
        <div className='text-center'>
                <Image style="inline-block" src={group}/>
                <Heading style="font-open text-5xl font-bold pt-[20px]" text="Our Latest Blog" as="h2"/>
                <Paragraph style="font-open text-lg text-paraColo leading-8 pt-[10px] pt-[20px]" text="We provide digital experience services to startups"/>
                <Paragraph style="font-open text-lg text-paraColo leading-8 pt[30px]" text="and small businesses."/>  
        </div>
        <div className='mt-[50px]'>
            <Flex style='justify-between'>
            <div className='w-[30%] bg-white rounded-lg'>
                <Card imgStyle="inline-block pb-[30px]" src={blog} title="How to Be Ahead of Stock Changes" style="text-sans text-2xl font-medium pl-[20px] pr-[50px] pb-[30px]" text="Read More" aStyle="text-lg font-semibold pl-[20px] relative after:absolute after:h-[30px] after:w-[30px] after:bg-bannerColo after:rounded-r-full  after:left-[100px] z-10 after:-z-10"/>
            </div>
            <div className='w-[30%] bg-white rounded-lg'>
                <Card imgStyle="inline-block pb-[30px]" src={blog} title="Online Reputation And Management" style="text-sans text-2xl font-medium pl-[20px] pr-[50px] pb-[30px]" text="Read More" aStyle="text-lg font-semibold pl-[20px] relative after:absolute after:h-[30px] after:w-[30px] after:bg-bannerColo after:rounded-r-full  after:left-[100px] z-10 after:-z-10"/>
            </div>
            <div className='w-[30%] bg-white rounded-lg'>
                <Card imgStyle="inline-block pb-[30px]" src={blog} title="Tips To Move Your Project More Forward" style="text-sans text-2xl font-medium pl-[20px] pr-[50px] pb-[30px]" text="Read More" aStyle="text-lg font-semibold pl-[20px] relative after:absolute after:h-[30px] after:w-[30px] after:bg-bannerColo after:rounded-r-full  after:left-[100px] z-10 after:-z-10"/>
            </div>
            </Flex>
        </div>
               
        </Container>
        
    </div>
  )
}

export default Blog