
import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Card from '../Card'
import group from '../../assets/Group.png'
import review1 from '../../assets/review1.png'
import review2 from '../../assets/review2.jpg'

const Review = () => {
  return (
    <div className='bg-whoBgColor  py-[100px]'>
        <Container>
            <Flex style='justify-between'> 
                <div className='w-[30%]'>
                    <Card imgStyle="inline-block pb-[20px]" src={group} title="Client Review" style="text-open text-3xl font-bold mb-4 " content="people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient." className="text-lg text-paraColo leading-8 pb[50px] mb-4"/>
                </div>
                
                <div className='w-[30%] bg-white rounded-lg hover:bg-sCardHoverColor'>
                    <Card imgStyle="inline-block pt-[10px] pl-[140px] " src={review1}  title="Jane Cooper" style="text-open text-[24px] font-semibold text-center" content="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient." className="text-lg text-paraColo leading-8 px-[40px] pb-[20px]"/>
                </div>
                <div className='w-[30%] bg-white rounded-lg hover:bg-sCardHoverColor'>
                    <Card imgStyle="inline-block pt-[10px] pl-[140px] " src={review2}  title="Eleanor Pena" style="text-open text-[24px] font-semibold text-center" content="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient." className="text-lg text-paraColo leading-8 px-[40px] pb-[20px]"/>
                </div>
            </Flex>
        </Container>
        {/*   style="text-open text-3xl font-bold mb-4 " */}
    </div>
  )
}

export default Review