import React from 'react'
import '../styles/PortfolioStyles.css'
import { FaEye, FaGithub } from "react-icons/fa";
import pokedex from '../assets/pokedexImg.png'
import rickandmorty from '../assets/rickAndMortyImg.png'
import weatherapp from '../assets/weatherApp.png'
import quotebox from '../assets/quoteBox.png'

const Portfolio = () => {
  return (
    <div className='body_portfolio'>
      <div className='portfolio'>
        <div className='container_title_proyects'>
          <h2 className='title_proyects'>Proyects</h2>
        </div>
        <div className='container_proyects'>
          <div className="proyect">
            <img src={rickandmorty} alt="rick and morty" />
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
            <img src={pokedex} alt="pokedex" />
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
            <img src={weatherapp} alt="Weather App" />
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
            <img src={quotebox} alt="QuoteBox" />
            <div className='datails'>
              <h3>QuoteBox</h3>
              <p>Random quote generetor proyect created with React JS, using CSS and JavaScript to make the styles.</p>  
              <section className='links_icon_proyects'>
                <a href="https://quote-box-app.netlify.app" className='link'><FaEye className='i'/></a>
                <a href="https://github.com/saac17/entregable1-react" className='link'><FaGithub className='i'/></a>
              </section>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Portfolio