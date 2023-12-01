import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'
import Button from '../Button'

const Navbar = () => {
  return (
    <nav className='bg-bannerBg py-[30px]'>
        <Container>
            <Flex style='justify-between'>
                <div className='w-1/4'>
                    <Image src={logo}/>
                </div>
                <div className='w-1/2'>
                   <ul>
                   <Flex style='justify-between'>
                        <List href="#" text="Home"/>
                        <List href="#" text="About"/>
                        <List href="#" text="Service"/>
                        <List href="#" text="Portfolio"/>
                        <List href="#" text="Price"/>
                        <List href="#" text="Blog"/>
                    </Flex>
                   </ul>
                </div>
                <div className='w1/4'>
                    <Button style='font-open text-xl font-semibold py-[5px] px-[28px] border-2 rounded-full bg-bannerColo text-white' text='Contact Us'/>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar