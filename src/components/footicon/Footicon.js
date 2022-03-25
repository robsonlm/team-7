import React from 'react'
import message from '../../assets/svg/message.svg'
import './Footicon.scss'


export default function Footicon({icon, label}) {
  return (
    <div className='footerIcon'>
        <img src={icon}></img>
        <p className='footerIcon__label'>{label}</p>
    </div>
  )
}
