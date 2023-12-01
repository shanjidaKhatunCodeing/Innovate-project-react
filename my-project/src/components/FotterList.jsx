import React from 'react'

const FotterList = ({link, text}) => {
  return (
    <li className='pb-[30px]'>
        <a className="font-sans text-[20px] text-paraColo font-semibold" href={link}>{text}</a>
       
    </li>
  )
}

export default FotterList