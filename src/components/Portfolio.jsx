import React, { useEffect, useState } from 'react'
import '../styles/PortfolioStyles.css'
import { FaEye, FaGithub } from "react-icons/fa";
import LoaderPage from './LoaderPage';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className='body_portfolio'>
      <div className='portfolio'>
        <div className='container_title_proyects'>
          <h2 className='title_proyects'>Proyects</h2>
        </div>
        <div className='container_proyects'>
          {
            isLoading === true ?
              <LoaderPage/>
            :
            <>
            <div className="proyect">
              <img src='http://drive.google.com/uc?export=view&id=1uTQj4fvsg_5czESBz-4E5fXuYHn426Iv' alt="rick and morty" />
              <div className='datails'>
                <h3>rick and morty</h3>
                <p>Rick And Morty character wiki proyect created with React JS, using axios to make the petition to the API, using CSS and JavaScript to make the animations and styles.</p>  
                <section className='links_icon_proyects'>
                  <a href="https://rick-andmorty-wikiapp.netlify.app" className='link'><FaEye className='i'/></a>
                  <a href="https://github.com/saac17/RickAndMortyApp" className='link'><FaGithub className='i'/></a>
                </section>
              </div>
            </div>
            <div className="proyect">
              <img src='http://drive.google.com/uc?export=view&id=1VppcuVPVXMZLiKKixCou_N_g0dRjGB0x' alt="pokedex" />
              <div className='datails'>
                <h3>pokedex</h3>
                <p>Pokedex proyect created with React JS, using axios to make the petition to the API, using CSS and JS to make the animations and styles.</p>  
                <section className='links_icon_proyects'>
                  <a href="https://pokedex-project-gen18.netlify.app" className='link'><FaEye className='i'/></a>
                  <a href="https://github.com/saac17/pokedex" className='link'><FaGithub className='i'/></a>
                </section>
              </div>
            </div>
            <div className="proyect">
              <img src='http://drive.google.com/uc?export=view&id=1-nac5hFNgHU5VYFBnrhkEyOCutzCnRsv' alt="Weather App" />
              <div className='datails'>
                <h3>Weather App</h3>
                <p>Weather App proyect created with React JS, using axios to make the petition to the API, using CSS and JS to make the animations and styles.</p>  
                <section className='links_icon_proyects'>
                  <a href="https://weather-app-saac.netlify.app" className='link'><FaEye className='i'/></a>
                  <a href="https://github.com/saac17/entregable2-react" className='link'><FaGithub className='i'/></a>
                </section>
              </div>
            </div>
            <div className="proyect">
              <img src='http://drive.google.com/uc?export=view&id=1hHwWmmpp3zCusYg3CKFx27cg3Kxh-sx9' alt="QuoteBox" />
              <div className='datails'>
                <h3>QuoteBox</h3>
                <p>Random quote generetor proyect created with React JS, using CSS and JavaScript to make the styles.</p>  
                <section className='links_icon_proyects'>
                  <a href="https://quote-box-app.netlify.app" className='link'><FaEye className='i'/></a>
                  <a href="https://github.com/saac17/entregable1-react" className='link'><FaGithub className='i'/></a>
                </section>
              </div>
            </div>
            <div className="proyect">
              <img src='http://drive.google.com/uc?export=view&id=1B62mCFsdw676knabq2H9c3hswI_2kbga' alt="Silocloms" />
              <div className='datails'>
                <h3>Silocloms</h3>
                <p>Beautiful website created for Silocloms, a leading grain import and export company in Argentina, Created with REACT JS, Vainilla Css, Tailwind and JavaScript.</p>  
                <section className='links_icon_proyects'>
                  <a href="https://siloclomsprueba.netlify.app/#/" className='link'><FaEye className='i'/></a>
                  <a href="https://github.com/saac17/entregable1-react" className='link'><FaGithub className='i'/></a>
                </section>
              </div>
            </div>  
            </>
          }
        </div>  
      </div>
    </div>
  )
}

export default Portfolio