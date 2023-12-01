import React from 'react'

const Worklist = ({href, text}) => {
  return (
    <li>
        <a className="font-open text-[24px] font-semibold list-none hover:text-bannerColo pr-[40px]" href={href}>{text}</a>
    </li>
  )
}

export default Worklist