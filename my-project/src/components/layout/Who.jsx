import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import who1 from '../../assets/who1.png'
import who2 from '../../assets/who2.png'
import who3 from '../../assets/who3.png'
import group from '../../assets/Group.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import frame from '../../assets/Frame.png'
import frame1 from '../../assets/Frame 1.png'
import frame2 from '../../assets/Frame2.png'
import frame3 from '../../assets/Frame 3.png'
import frame4 from '../../assets/Frame 4.png'
import frame5 from '../../assets/Frame 5.png'


const Who = () => {
  return (
    <div className='bg-whoBgColor py-[80px]'>
        <Container>
            <Flex style='justify-between'>
                <div className='w-1/2 relative pl-[70px]'>
                    <Image style="absolute top-[110px] left-[-20px] z-0 " src={who1}/>
                    <Image style="absolute z-10" src={who2}/>
                    <Image style="absolute top-[290px] left-[-60px] z-20" src={who3}/>
                </div>
                <div className='ml-[40px] w-1/2'>
                    <Image src={group}/>
                    <Heading style="font-open text-[48px] font-bold py-[15px]" text="Who We Are" as="h2"/>
                    <Paragraph style="font-open text-lg text-paraColo pr-[200px] pb-[45px]" text="We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, "/>
                    <div className='pb-[50px] '>
                        <Image style="inline-block pr-[70px]" src={frame}/>
                        <Image style="inline-block pr-[70px]" src={frame1}/>
                        <Image style="inline-block pr-[70px]" src={frame2}/>
                    </div>
                        <div>
                            <Image style="inline-block pr-[80px]" src={frame3}/>
                            <Image style="inline-block pr-[80px]" src={frame4}/>
                            <Image style="inline-block pr-[70px]" src={frame5}/>
                        </div>
                        
                    
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Who