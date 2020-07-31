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

const CadastroVideo = () => {
  return (
    <>
      <LayoutDefault>
        <Main>
          <h1>Cadastro de vídeo</h1>
          <form>

            <label>
              Nome da Categoria:
              <input
                type="text"
              />
            </label>

            <button>
              Cadastrar
            </button>

          </form>
          <Link to="/cadastro/categoria">Nova categoria</Link>
        </Main>
      </LayoutDefault>
    </>
  )
}

export default CadastroVideo
