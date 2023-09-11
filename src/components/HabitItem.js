import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { removeHabit, updateFav, updateStatus } from '../redux/slices/habitSlice';

import {BiSolidMinusCircle} from 'react-icons/bi';
import {BsFillTrashFill,BsStar,BsFillStarFill,BsFillCheckCircleFill,BsFillXCircleFill} from 'react-icons/bs';

const HabitItem = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {return state.habit});

  return (
    data?.map((element,index) => {return(
      <div className="habit" key={index}>
        <div className="habit-name">
          <p>{element.habitName} - Weekly</p>
          <div>
            <BsFillTrashFill size={20} style={{color:'red', marginRight:'15px'}} onClick={() => dispatch(removeHabit(index))}/>
            {element.isFav ? <BsFillStarFill size={20} style={{color:'orange'}} onClick={() => dispatch(updateFav(index))}/>: <BsStar size={20} onClick={() => dispatch(updateFav(index))}/>}
          </div>
        </div>
        <div className="dates-wrapper">
          {element.dates.map((date,i) => {return (
            <div key={i} className="date">
              {date.status === 'none' ? <BiSolidMinusCircle size={20} style={{color:'orange'}} onClick={() => dispatch(updateStatus({index,i}))}/> : date.status === 'done'?  <BsFillCheckCircleFill size={20} style={{color:'green'}} onClick={() => dispatch(updateStatus({index,i}))}/> : <BsFillXCircleFill size={20} style={{color:'red'}} onClick={() => dispatch(updateStatus({index,i}))}/>}
              <p>{date.date}</p>
            </div>)}
          )}
        </div>
      </div>
    )})
  )
}

export default HabitItem;