import React from 'react'

export default function Form() {
  return (
    <div className='form'>
      <h1 className='form__greeting'>Good evening, Olivia</h1>
      <fieldset>
        <label>From</label>
        <input></input>
        <label>To</label>
        <input></input>
        <div className='form__radio'>
          radio
        </div>
        <div className='form__dropdown'>

        </div>
        <button className='form__submit'>Search</button>
      </fieldset>
    </div>
  )
}
