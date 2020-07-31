import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'

const LayoutDefault = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  )
}

export default LayoutDefault
