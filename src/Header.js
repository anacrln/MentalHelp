import React from 'react'
import './Header.css'

function Header() {
  return(
    <div>
      <header>
        <nav>
          {/* <div className="logo-img">
            <img src="img/logo-mentalHelp.png" alt="" />
          </div> */}
          <a href="/" className="logo">Mental Help</a>
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