import React from 'react'
import './Form.scss'
import Button  from '../button/Button';
export default function Form() {
  return (
    <div className='form'>
      
      <h1 className='form__greeting'>Good evening, Olivia</h1>
      <fieldset className='form__fieldset'>
      <div className='form__titles'>
        <h2 className='form__title form__title--active'>Recurring</h2>
        <h2 className='form__title form__title--active'>One ride</h2>
      </div>
        <label>From</label>
        <input></input>
        <label>To</label>
        <input></input>
        <div className='form__radio'>
        <input type="radio" name="contact" value="Ride" />
        <label  for="email">Ride</label>
        <input className='form__radiolabel' type="radio" name="contact" value="Drive" />
        <label className='form__radiolabel' for="phone">Drive</label>
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
          <select id="frequency" name="frequency">
            <option value ='weekdays' > Weekdays</option>
            <option value ='weekends' > Weekends</option>
            
          </select>
        </div>
        <Button text='search'/>

      </fieldset>
    </div>
  )
}
