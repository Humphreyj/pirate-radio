import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from '../util';

const Time = () => {
  const [time, updatetime] = useState({
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    second: '',
    greeting: ''
  });

  useEffect(() => {
    let showTimeTimeout;
    const showTime = () => {
      let today = new Date();
      let year = today.getFullYear() + 930;
      let month = today.getMonth();
      let day = today.getUTCDate() -1;
      let hour = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();
      let greeting = '';

      if (hour < 12) {
        greeting = 'Good Morning, Citizen.';
      } 
      else if (hour < 18) {
        greeting = 'Good Afternoon, Citizen.';
      } 
      else {
        greeting = 'Good Evening, Citizen.';
      }

      updatetime({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minutes: minutes,
        seconds: seconds,
        greeting: greeting,
      });

      showTimeTimeout = setTimeout(showTime, 1000);
    };

    const showGreeting = () => {};
    showGreeting();
    showTime();

    return function cleanup() {
      if (showTimeTimeout) { clearTimeout(showTimeTimeout); }
    };
  }, []);

  const TimeWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${color.whitish};
  `;
  const DateWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 20%;
  `;
  const CurrentTime = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 20%;
  `;
  const Greeting = styled.p`
    letter-spacing: .1rem;
  `;

  const addZero = (num) => {
    return (parseInt(num, 10) < 10 ? '0' : '') + num;
  };

  return (
    <TimeWrap>
      <DateWrap>
        <p>{addZero(time.month + 1)}</p>
        <p>-</p>
        <p>{addZero(time.day)}</p>
        <p>-</p>
        <p>{time.year}</p>
      </DateWrap>
      <Greeting>{time.greeting}</Greeting>

      <CurrentTime>
        <p>{addZero(time.hour)}</p>
        <p>:</p>
        <p>{addZero(time.minutes)}</p>
        <p>:</p>
        <p>{addZero(time.seconds)}</p>
      </CurrentTime>
    </TimeWrap>
  );
}

export default Time;
