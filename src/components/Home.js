import React, { useEffect, useRef } from 'react';
import pdf from "../pdf/ARTIKUNDE.pdf";
//import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json"
import Typed from "typed.js";




const Home = () => {

    const typedRef = useRef(null)
    useEffect(()=> {

      const options = {
        strings:["Welcome to my profile" , "My Name is Arti Kunde" , "I'm Frontend Developer" , "React.Js Developer" , "Having 2 Years of experience"],
        typedSpeed:55,
        backSpeed:55,
        loop:true
      }

      const typed = new Typed(typedRef.current , options)

      return () => {
        typed.destroy()
      }
    }, [])
    


  return (
    <>
    <div className="container home" id="home">
      <div className="laft"data-aos="fade-up-right"
      data-aos-duration="1000"
      >
        <h1 ref={typedRef}></h1>
       
        <a href={pdf} 
        className="btn btn-outline-warning my-3">Download Resume</a>
      </div>

      <div className="right">
        <div className="img" data-aos="fade-up-laft"
      data-aos-duration="1000">
        <img src={`/assets/${hero.imgSrc}`} alt="hero"/>
      </div>
      </div>

    </div>
    </>
  )
}

export default Home
