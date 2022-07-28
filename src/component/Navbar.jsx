import React from 'react';
import styled from 'styled-components';
import { BiSearch} from 'react-icons/bi'

const Navbar = () => {
  return (
      <Nav>
        <div className='title' >
          <h4> Hi Taha, </h4>
          <h1> Welcome to <span>MY TAXI DASHBOARD </span> </h1>
        </div>
        <div className='searsh' >
          <BiSearch/>
          <input type='text' placeholder='Search' />
        </div>
      </Nav>

  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title{
    h1 {
      span{
        margin-left: 0.5rem ;
        color: #ffc107;
        letter-spacing: 0.2rem;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  .searsh{
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg{
      color: #ffc107;
    }
    input{
      background-color: transparent;
      border: none;
      outline: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &::placeholder{
        color: #ffc107;
        opacity: .8;

      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`