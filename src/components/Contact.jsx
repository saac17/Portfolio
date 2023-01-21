import React from 'react'
import '../styles/ContactStyles.css'
import logo from '../assets/myLogo.png'

const Contact = () => {
  return (
    <div className='body_contact'>
      <div className='contact'>
        <div className='title_contact_container'>
          <h2 className='title_contact'>Contact me:</h2>
        </div>
        <div className='contact_info_container'>
          <div className='logo_container'>
            <img src={logo} alt="my_logo" />
          </div>
          <div className='accounts_container'>
            <ul className='accounts_ul'>
              <li>
                <a href="https://instagram.com/santiagoalejandro3919?igshid=ZDdkNTZiNTM=">
                  <i class='bx bxl-instagram'></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Santiag80446463?t=7BcxoKu497qd2JuDx8U64A&s=09">
                  <i class='bx bxl-twitter'></i>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=+573124111196">
                  <i class='bx bxl-whatsapp'></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/santiago-alejandro-alvarez-capera-30b083209/">
                  <i class='bx bxl-linkedin'></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/saac17">
                  <i class='bx bxl-github'></i>
                </a>
              </li>
              <li>
                <a href="mailto:saac17062003@gmail.com?subject=Job%20opportunity">
                  <i class='bx bxl-gmail'></i>
                </a>
              </li>
              <li>
                <a href="https://t.me/+573124111196">
                  <i class='bx bxl-telegram'></i>
                </a>
              </li>
            </ul>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Contact