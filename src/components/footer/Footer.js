import React from 'react'
import Footicon from '../footicon/Footicon'
import './Footer.scss';
import message from '../../assets/svg/chats.png.png';
import profile from '../../assets/svg/profile.png.png';
import search from '../../assets/svg/search.svg';
export default function Footer() {
  return (
      <section className='footer'>
    <Footicon icon = {message} label={'chats'} white={''}/>
    <div className='blueback'>
      <Footicon icon = {search} label={'search'} link ={'/form'} white={'white'}/>
    </div>
    <Footicon icon = {profile} label={'profile'} link={'/profile/1'} white={''}/>
   
    </section>
  )
}
