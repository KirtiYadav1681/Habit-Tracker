import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addHabit } from '../redux/slices/habitSlice';

const Home = () => {
  const [habitName, setHabitName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (habitName) => {
    dispatch(addHabit({habitName:habitName, dates:getNextSevenDays(getTodayDate()), isFav:false}));
    navigate('/my-habits');
  }

  // function to get formatted today's date
    function getTodayDate() {
      let currentDate = new Date();
      let day = currentDate.getDate();
      if (day < 10) day = '0' + day;
      let month = currentDate.getMonth() + 1;
      if (month < 10) month = '0' + month;
      let year = currentDate.getFullYear();
      let today = day + "/" + month + "/" + year;
      return today;
    }

  // function to get formatted one week dates
    function getNextSevenDays(inputDate) {
      // Split the input date into day, month, and year components
      const [day, month, year] = inputDate.split('/').map(Number);
      // Create a JavaScript Date object using the input components
      const currentDate = new Date(year, month - 1, day); // Month is zero-based (0-11)
      // Initialize an array to store the next seven days
      const nextSevenDays = [];
      // Loop to add the next seven days to the array
      for (let i = 0; i < 7; i++) {
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + i);
        const formattedDate = `${nextDay.getDate()}/${nextDay.getMonth() + 1}/${nextDay.getFullYear()}`;
        nextSevenDays.push({date: formattedDate, status:"none"});
      }
      return nextSevenDays;
    }

  return (
    <div className="home-main">
      <main className="main">
        <div className="quote">
          <p>
          Build Better Habits,<br/>
          Build a Better Life
          </p>
        </div>

        <div>
          <input className="input" name="habitName" placeholder="Type your habbit here..." onChange={(e) => setHabitName(e.target.value)}/>
          <button onClick={() => handleClick(habitName)} className='form-button'>Add </button>
        </div>
      </main>
    </div>
  )
}

export default Home