import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import { styled } from 'styled-components'
import "./style.scss";
import project1 from '../../images/ux/project1.png';
import project2 from '../../images/ux/project2.png';
import project3 from '../../images/ux/project3.png';
import project4 from '../../images/ux/project4.png';
import grproject1 from '../../images/graphic/project1.png';
import grproject2 from '../../images/graphic/project2.png';
import grproject3 from '../../images/graphic/project3.png';
import grproject4 from '../../images/graphic/project4.png';
import grproject5 from '../../images/graphic/project5.png';
import grproject6 from '../../images/graphic/project6.png';
import grproject7 from '../../images/graphic/project7.png';

const images = [
  {
    projects: [
      {
          src:project1,
          link:""
      },
      {
          src:project2,
          link:""
      },
      {
          src:project3,
          link:""
      },
      {
          src:project4,
          link:""
      },
    ]
  },

  {
    projects: [
      {
          src:grproject1,
          link:""
      },
      {
          src:grproject2,
          link:""
      },
      {
          src:grproject3,
          link:""
      },
      {
          src:grproject4,
          link:""
      },
      {
          src:grproject5,
          link:""
      },
      {
          src:grproject6,
          link:""
      },
      {
          src:grproject7,
          link:""
      },
    ]
  },
];
function GalleryItem({
  projects,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"gallery-item"}>
        <div className={projects.length<5 ? "uxui" :"graphic"}>
            <div className="layoutHelper">
              {projects.map((el, index)=>(
                <ProjectImage  key={el.src} imgSrc={el.src} index={index}></ProjectImage>
              ))}
            </div>
            
          
          
        </div>

      </div>
      <div></div>
    </div>
  );
}


const ProjectImage = ({imgSrc, link,key}) => {
  return(
    <div className="project-image">
      
      <img src={imgSrc}></img>
    </div>
  )
}

const Name = styled.div`   
    font-size:4rem;
    font-weight:bold;
    width:33%;
    position: sticky;
  

    
`
const Objective = styled.div`
    margin-top:4.5%;
    width:33%;
`

export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      let sections = gsap.utils.toArray(".gallery-item-wrapper");
  
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ".gallery", // Update this to target the correct element
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1), // Make sure this is correct
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap" id="scroll-target">
      <div className="profile" data-scroll data-scroll-sticky data-scroll-target="#scroll-target">
        <Name ><p>Kate Yugay</p></Name>
        <Objective><p>a passionate UX/UI designer with a flair for creating seamless digital experiences that leave users enchanted and engaged. With a keen eye for detail and a love for problem-solving</p></Objective>
      
      </div> 
      <div className="gallery" ref={ref} >
        <div className="gallery-counter">
          {/* <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span> */}
          <span
          
          className="divider"/>
          <span 
          style={{
            fontSize: activeImage % 2 === 0 ? 20 : 40,
            transition: 'font-size 0.5s ease-in-out', // Add transition property
          }}
          >UX/UI design</span>
          <span style={{fontSize:40}}>/</span>
          <span 
            style={{
              fontSize: activeImage % 2 === 0 ? 40 : 20,
              transition: 'font-size 0.5s ease-in-out', // Add transition property
            }}
          >Graphic design</span>
          <span className="divider"/>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={src}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}
