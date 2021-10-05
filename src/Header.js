import React from 'react'
import './Header.css'
import logoMentalHelp from './img/logo-mentalHelp1.png'

function Header() {
  return(
    <div>
      <header>
        <nav>
          <div className="logo-img">
            <img src={logoMentalHelp} className="logo-img" alt="" />
            <a href="/" className="logo">Mental Help</a>
          </div>
          <div className="mobile-menu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className="nav-list">
            <li>Inicio</li>
            <li>Diário</li>
            <li>Dicas</li>
            <li>Sing up</li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header;