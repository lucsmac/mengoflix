import React from 'react'
import LayoutDefault from '../../../components/LayoutDefault'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.main`
  background: var(--black);
  color: var(--white);
  padding: 50px 5%;
  flex: 1;
`

const CadastroCategoria = () => {
  return (
    <>
      <LayoutDefault>
        <Main>
          <h1>Cadastro de categoria</h1>

          <Link to="/cadastro/video">Novo vídeo</Link>
        </Main>
      </LayoutDefault>
    </>
  )
}

export default CadastroCategoria
