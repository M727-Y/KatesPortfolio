import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import { styled } from 'styled-components'
import "./style.scss";

const images = [
  {
    src:
      "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },

  {
    src:
      "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];
function GalleryItem({
  src,
  category,
  subtitle,
  title,
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
          {projectListUxUi.map((image, index)=>(
              <ProjectImage key={image.src} index={index}></ProjectImage>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}

const ProjectImage = styled.div`
    height:80%;
    width:20%;
    background-color:#000;  
`
const projectListUxUi = [
  {
      src:"",
      link:""
  },
  {
      src:"",
      link:""
  },
  {
      src:"",
      link:""
  },
  {
      src:"",
      link:""
  },
]


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

      <div className="gallery" ref={ref}>
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
