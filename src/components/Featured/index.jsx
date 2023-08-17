import React from "react";
import photos from "../../data";
import { styled } from 'styled-components'
import "./style.scss";
const Name = styled.div`   
    font-size:4rem;
    font-weight:bold;
    width:33%
    
`
const Objective = styled.div`
    margin-top:4.5%;
    width:33%;
`
export default function Featured() {
  const [firstImage, secondImage] = photos;
  return (
    <section className="featured-section"  data-scroll-section>
      <Name><p>Kate Yugay</p></Name>
      <Objective><p>a passionate UX/UI designer with a flair for creating seamless digital experiences that leave users enchanted and engaged. With a keen eye for detail and a love for problem-solving</p></Objective>
      <div></div>
    </section>
  );
}
