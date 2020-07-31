import React from 'react'
import './Menu.css'
import Logo from '../../assets/images/Logo.png'
import Button from '../Button'

const Menu = () => {
  return (
    <header>
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="Mengoflix" title="Mengoflix" />
        </a>

        <Button as="a" className="ButtonLink">Novo video</Button>
      </nav>
    </header>
  )
}

export default Menu
