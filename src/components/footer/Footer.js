import React from 'react'
import Footicon from '../footicon/Footicon'
import './Footer.scss';
import message from '../../assets/svg/message.svg';
import profile from '../../assets/svg/profile.svg';
import search from '../../assets/svg/search.svg';
export default function Footer() {
  return (
      <section className='footer'>
    <Footicon icon = {message} label={'chats'} />
    <Footicon icon = {search} label={'search'} link ={'/form'}/>
    <Footicon icon = {profile} label={'profile'} link={'/profile/1'} />
   
    </section>
  )
}
