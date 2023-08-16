import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import gsap from "gsap";
import image from '../../images/untitled.png';
import SplitText from "../../utils/Split3.min";

import "./style.scss";

const SVGWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border-radius:2rem;
  width:90%;
  height:70vh;
  margin: 0 auto 0;
  background-image: url(${image}); /* Use props to dynamically set the background image */
  background-size: cover;
  background-position: center center;
`;
const ButtonGroup = styled.div`
    grid-column: 1;
    grid-row: 2;
    z-index:5;
    width:70%;
    height:95%;
    
    display:flex;
    justify-content:center;
    align-items: flex-end;



`
const CustomButton = styled.a`
    border: 0.15rem solid #55DAEF;
    border-radius:5rem;
    color:#CDD5E0;
    margin:1%;
    width:40%;
    padding:2%;
    text-align:center;
    

    &:hover{
        background-color:#55DAEF;
        color:#000
    }

`
const Links = styled.div`
grid-column: 1;
grid-row: 1;
margin-left:10%;
margin-top:5%;
z-index:1;

display:flex;
flex-direction:column;
ul{
    
    list-style:none;
    right:0;
}
a{
    width:10%;
    color: #97A3B6;

}
a:hover{
    text-decoration:underline;
}
p{
    color: #97A3B6;
}
`

export default function Header() {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });
    
    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <section className="header-container" data-scroll-section>
      {/* <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text">Art Objects</h1> */}
      
      <SVGWrapper>
          <Links>
            
            <p>Socials</p>
            <ul>
                <li><a>Behance</a></li>
                <li><a>Telegram</a></li>
                <li><a>LinkedIn</a></li>
            </ul>
          </Links>
        <ButtonGroup>
          <CustomButton>UX/UI Designer</CustomButton>
          <CustomButton>Graphic designer</CustomButton>
        </ButtonGroup>

      </SVGWrapper>
    </section>
  );
}
