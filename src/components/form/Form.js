import React from 'react'
import { useEffect, useState } from "react";
import './Form.scss'
import Button  from '../button/Button';
import data from '../../data/data.json'
export default function Form({setMatchResults, history}) {
  const [rideOrDrive, setRideOrDrive] = useState([]);
  console.log(history)
  const onChange = (e) =>{
    console.log(e.target.value)
    setRideOrDrive(e.target.value)

  }
  const onSubmit = (search)=>{
    search.preventDefault()

    console.log("from ",search.target.from.value)
    console.log("to",search.target.to.value)

    console.log("ride or drive ",rideOrDrive)
    console.log("time ",search.target.from.value)
    console.log("days ",search.target.days.value)
    const searched ={
      "from": search.target.from.value,
      "to": search.target.to.value,
      "role": rideOrDrive,
    }
    console.log('searched',searched)
    console.log('data',data)
    const filtered = data.filter(
      (w) =>
        w.from.includes(searched.from) &&
        w.to.includes(searched.to) &&
        w.role.includes(searched.role)
    );
    console.log(filtered)
    setMatchResults(filtered);
    history.push('/matchresults')
  
   


  }
  return (
    <div className='form'>
      
      <h1 className='form__greeting'>Good evening, Olivia</h1>
      <form className='form__fieldset' onSubmit={onSubmit}>
      <div className='form__titles'>
        <h2 className='form__title form__title--active'>Recurring</h2>
        <h2 className='form__title'>One ride</h2>
      </div>
        <label className='form__locationlabel'>From</label>
        <input id="from" name="from"></input>
        <label className='form__locationlabel form__tolabel'>To</label>
        <input id="toInput" name="to"></input>
        <div className='form__radio'>
        <input type="radio" name="ride" value="Ride" checked={rideOrDrive ==="Ride"} onChange={onChange}/>
        <label className='form__radiolabel' >Ride</label>
        <input  type="radio" name="drive" value="Drive" checked={rideOrDrive ==="Drive"} onChange={onChange}/>
        <label className='form__radiolabel' >Drive</label>
        </div>
        <div className='form__dropdown'>
          <select id="time" name="time">
            <option value ='1' > At 1 am</option>
            <option value ='2' > At 2 am</option>
            <option value ='3' > At 3 am</option>
            <option value ='4' > At 4 am</option>
            <option value ='5' > At 5 am</option>
            <option value ='6' > At 6 am</option>
            <option value ='7' > At 7 am</option>
            <option value ='8' > At 8 am</option>
            <option value ='9' > At 9 am</option>
            <option value ='10' > At 10 am</option>
            <option value ='11' > At 11 am</option>
            <option value ='12' > At 12 pm</option>
            <option value ='13' > At 1 pm</option>
            <option value ='14' > At 2 pm</option>
            <option value ='15' > At 3 pm</option>
            <option value ='16' > At 4 pm</option>
            <option value ='17' > At 5 pm</option>
            <option value ='18' > At 6 pm</option>
            <option value ='19' > At 7 pm</option>
            <option value ='20' > At 8 pm</option>
            <option value ='21' > At 9 pm</option>
            <option value ='22' > At 10 pm</option>
            <option value ='23' > At 11 pm</option>
            <option value ='24' > At 12 am</option>
            
          </select>
          <select id="days" name="days">
            <option value ='weekdays' > Weekdays</option>
            <option value ='weekends' > Weekends</option>
            
          </select>
        </div>
        <Button text='Search'/>

      </form>
    </div>
  )
}
