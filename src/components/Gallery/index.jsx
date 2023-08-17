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
          src:"",
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
        <div className='uxui'>
          {projects.map((el, index)=>(
              <ProjectImage key={el.src} imgSrc={el.src} index={index}></ProjectImage>
          ))}
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


export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
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
    <section data-scroll-section className="section-wrapper gallery-wrap">

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
