import React from 'react';

import {BiSolidMinusCircle} from 'react-icons/bi';
import {BsFillCheckCircleFill,BsFillXCircleFill} from 'react-icons/bs';

import HabitItem from './HabitItem';


const Habits = () => {

  return (
    <div className="habits-container">
      <div className="sign">
        <div className="signs">
          <BsFillCheckCircleFill style={{color: '#00d640'}}/>
          <p>Done</p>          
        </div>

        <div className="signs">
          <BsFillXCircleFill style={{color: '#ff0000'}}/>
          <p>Not Done</p>          
        </div>

        <div className="signs">
          <BiSolidMinusCircle style={{color: '#ff8000'}} /> 
          <p>Unmarked</p>  
        </div>   
      </div>

      <section className="habits-list-wrapper">
        <HabitItem />
      </section>
    </div>
  )
}

export default Habits