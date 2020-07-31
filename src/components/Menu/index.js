import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import Logo from '../../assets/images/Logo.png'
import Button from '../Button'

const Menu = () => {
  return (
    <header>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Mengoflix" title="Mengoflix" />
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo video</Button>
      </nav>
    </header>
  )
}

export default Menu
