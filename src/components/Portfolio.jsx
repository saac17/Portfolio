import React from 'react'
import '../styles/PortfolioStyles.css'
import { FaEye, FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className='body_portfolio'>
      <div className='portfolio'>
        <div className='container_title_proyects'>
          <h2 className='title_proyects'>Proyects</h2>
        </div>
        <div className='container_proyects'>
          <div className="proyect">
            <img src="https://es.rollingstone.com/wp-content/uploads/2022/09/La-serie-Rick-y-Morty-podria-ser-eterna.jpg" alt="rick and morty" />
            <div className='datails'>
              <h3>rick and morty</h3>
              <p>Pokedex proyect created with React JS, using axios to make the petition to the API, using CSS and JS to make the animations and styles.</p>  
              <section className='links_icon_proyects'>
                <a href="" className='link'><FaEye className='i'/></a>
                <a href="" className='link'><FaGithub className='i'/></a>
              </section>
            </div>
          </div>
          <div className="proyect">
            <img src="https://alfabetajuega.com/hero/2019/09/pokemon-pokedex-pikachu.jpg?width=1200" alt="pokedex" />
            <div className='datails'>
              <h3>pokedex</h3>
              <p>Pokedex proyect created with React JS, using axios to make the petition to the API, using CSS and JS to make the animations and styles.</p>  
              <section className='links_icon_proyects'>
                <a href="" className='link'><FaEye className='i'/></a>
                <a href="" className='link'><FaGithub className='i'/></a>
              </section>
            </div>
          </div>
          <div className="proyect">
            <img src="https://unamglobal.unam.mx/wp-content/uploads/2021/08/cambio-climatico-causas-consecuencias-2-990x556.jpg" alt="Weather App" />
            <div className='datails'>
              <h3>Weather App</h3>
              <p>Weather App proyect created with React JS, using axios to make the petition to the API, using CSS and JS to make the animations and styles.</p>  
              <section className='links_icon_proyects'>
                <a href="" className='link'><FaEye className='i'/></a>
                <a href="" className='link'><FaGithub className='i'/></a>
              </section>
            </div>
          </div>
          <div className="proyect">
            <img src="https://parade.com/.image/t_share/MTkwNTc2MDAxNjM0MjE1ODA0/mlk-inspirational-quote.jpg" alt="QuoteBox" />
            <div className='datails'>
              <h3>QuoteBox</h3>
              <p>Random quote generetor proyect created with React JS, using axios to make the petition to the API, using CSS and JavaScript to make the styles.</p>  
              <section className='links_icon_proyects'>
                <a href="" className='link'><FaEye className='i'/></a>
                <a href="" className='link'><FaGithub className='i'/></a>
              </section>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Portfolio