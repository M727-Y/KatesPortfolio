import React from 'react'
import styled from 'styled-components';
import logo from '../../images/logo.png';
const NavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    display: flex;
    justify-content: space-between;
    background-color:#F8FAFC;
    height:6.25%;
    padding:0 10%;
    z-index:10;
    img{
      height:100%;
    }
`;

const NavButtons = styled.nav`
    width:40%;
    
    display:flex;
    justify-content:space-between;
    
    
`

const Button = styled.button`
    width:15%;
    font-size: 1rem;
    font-family:'ITC Avant Garde Gothic Pro-Medium';
    background-color:#F8FAFC;
    color:#000;
    border: none;
    border-radius: 0.8rem;
    
    &:hover {
        background-color: #000;
        color: #fff; 
      }
`;


const NavButton = ({ label, onClick }) => {
    return <Button onClick={onClick}>{label}</Button>;
  };

export default function Navbar() {
    const handleButtonClick = (buttonName) => {
        console.log(`Clicked ${buttonName}`);
      };
  return (
    <NavbarContainer>
        <div>
          <img  src={logo} alt="Logo" />
        </div>
        <NavButtons>
            <NavButton label="Portfolio" onClick={() => handleButtonClick('Portfolio')} />
            <NavButton label="Contacts" onClick={() => handleButtonClick('Contacts')} />
            <NavButton label="Resume" onClick={() => handleButtonClick('Resume')} />
            <NavButton label="Message" onClick={() => handleButtonClick('Message')} />
        </NavButtons>
    </NavbarContainer>
  )
}
