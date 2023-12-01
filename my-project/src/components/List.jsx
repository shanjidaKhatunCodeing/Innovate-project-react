import React from 'react'
import Icon from './Icon'

const List = ({href, text}) => {
  return (
    <li>
        <a className="font-open text-xl font-semibold list-none hover:text-bannerColo pr-[10px]" href={href}>{text} <Icon style="fa-solid fa-chevron-down "/></a>
    </li>
  )
}

export default List