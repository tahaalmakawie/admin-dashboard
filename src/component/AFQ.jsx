import React from 'react'
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyle } from "./ReusableStyle";

const AFQ = () => {
  const faqs = [
    {
      id:1,
      icon: <AiFillCalendar />,
      text: "How to manage time and get good marks for trips",
    },
    {
      id:2,
      icon: <MdTimelapse />,
      text: "How to regulate transactions over time",
    },
    {
      id:3,
      icon: <IoMdCash />,
      text: "Withdrawing money through an ATM",
    },
  ];
  return (
    <Section>
      <div className='title' >
        <h2> Information for drivers </h2>
      </div>
      <div className='faqs' >
        {
          faqs.map( (faq) => (
            <div className='faq' key={faq.id}>
              <div className='info'>
                {faq.icon}
                <h4> {faq.text} </h4>
              </div>
              <IoIosArrowForward/>
            </div>
          ))
        }
      </div>

    </Section>
  )
}

export default AFQ

const Section = styled.section`
  ${cardStyle};
  .title{
    h2{
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .faqs{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top:1rem ;
    .faq{
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info{
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg{
        font-size: 1.4rem;

      }
      &:nth-last-of-type(2){
        border-top: 0.01rem solid #6c6c6c;
        border-bottom: 0.01rem solid #6c6c6c;
        padding: 0.8rem;
      }
    }
  }
`