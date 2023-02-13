import React from 'react'
import Typewriter from 'typewriter-effect'
import '../styles/HomeStyles.css'
import Curriculum from '../assets/CV_SANTIAGO_A_ALVAREZ_C.pdf'


const Home = () => {
  return (
    <div className='body_home'>
      <section className='home'>
        <h3 className='skills'>
          <span>
            <Typewriter 
            options={{
              strings: [
                "Front End Developer",
                "React Js",
                "Bootstrap",
                "JavaScript",
                "Designer",
              ],
              autoStart: true,
              loop: true,
            }}
            />
          </span>
        </h3>
        <h1 className='myName'>Santiago Alejandro Alvarez Capera</h1>
        <a href={Curriculum} download="CV_Santiago_A_Alvarez_C" className="Download_Cv_Btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DOWNLOAD CV
        </a>
      </section>  
    </div>
    
  )
}

export default Home