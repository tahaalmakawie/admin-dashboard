import React from 'react'
import styled from 'styled-components'
import { cardStyle } from './ReusableStyle'
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";


const Analytics = () => {
  return (
    <Section>
      <div className='anlytic'>
        <div className='content' > 
          <h5> Spent this month </h5>
          <h2> $682 </h2>
        </div>
        <div className='logo' >
          <BsFillCalendar2WeekFill/>
        </div>
      </div>
      <div className='anlytic'>
      <div className='logo'>
        <IoStatsChart/>
      </div>
        <div className='content'>
          <h5>Ernings</h5>
          <h2> $350.40 </h2>
        </div>
      </div>
      <div className='anlytic'>
      <div className='logo'> <BiGroup/> </div>
        <div className='content'>
          <h5> New Clints </h5>
          <h2> 321 </h2>
        </div>
      </div>
      <div className='anlytic'>
      <div className='content'>
        <h5> Activity </h5>
        <h2>  $5450. </h2>
      </div>
      <div className='logo'>
        <FiActivity/>
      </div>
      </div>
    </Section>
  )
}

export default Analytics

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .anlytic{
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover{
      background-color: #ffc107;
      color: black;
      svg{
        color: white;
      }
    }
    .logo{
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg{
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .anlytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`