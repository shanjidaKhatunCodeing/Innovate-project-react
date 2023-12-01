import React from 'react'
import Image from '../Image'
import group from '../../assets/Group.png'
import Heading from '../Heading'
import Container from '../Container'
import Flex from '../Flex'
import Worklist from '../Worklist'
import work1 from '../../assets/work1.png'
import work2 from '../../assets/work2.png'
import work3 from '../../assets/work3.png'
import work4 from '../../assets/work4.png'
import work5 from '../../assets/work5.png'
import work6 from '../../assets/work6.png'

const Work = () => {
  return (
    <div className='bg-workBgColor py-[120px] text-center'>
        <Container>
        <div>
            <Image style="inline-block" src={group}/>
            <Heading style="font-open text-[48px] font-bold pb-[45px]" text="Work Showcase" as="h2"/>
        </div>
        <div className='pb-[50px]'>
            
            <ul>
            <Flex>
                <Worklist href="#" text="All"/>
                <Worklist href="#" text="Branding"/>
                <Worklist href="#" text="Content Mkt"/>
                <Worklist href="#" text="Social Media Mkt"/>
            </Flex>
            </ul>
        </div>
        <div>
            <div className='pb-[30px]'>
                <Flex style='justify-between'>
                    <Image src={work1}/>
                    <Image src={work2}/>
                    <Image src={work3}/>
                </Flex>
            </div>
            <div>
                <Flex style='justify-between'>
                    <Image src={work4}/>
                    <Image src={work5}/>
                    <Image src={work6}/>
                </Flex>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Work