import React from 'react'
import LayoutDefault from '../../../components/LayoutDefault'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FormField from '../../../components/FormField'

const Main = styled.main`
  background: var(--black);
  color: var(--white);
  padding: 50px 5%;
  flex: 1;
`

const CadastroCategoria = () => {

  const categoriaModel = {
    nome: '',
    descricao: '',
    cor: '#000000'
  }
  const [categorias, setCategorias] = React.useState([])
  const [categoriaAtual, setCategoriaAtual] = React.useState(categoriaModel)

  const handleChange = ({ target }) => {
    setCategoriaAtual((categoriaAtual) => {
      return {
        ...categoriaAtual,
        [target.id]: target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCategorias([...categorias, categoriaAtual])
    setCategoriaAtual(categoriaModel)
  }

  return (
    <>
      <LayoutDefault>
        <Main>
          <h1>Cadastro de categoria: {categoriaAtual.nome}</h1>

          <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>

            <FormField id="nome" value={categoriaAtual.nome} type="text" onChange={handleChange}>Nome</FormField>

            <FormField textarea={true} id="descricao" value={categoriaAtual.descricao} type="text" onChange={handleChange}>Descrição</FormField>

            <FormField id="cor" value={categoriaAtual.cor} type="color" onChange={handleChange}>Cor</FormField>

            <button>
              Cadastrar
            </button>
          </form>

          <ul>
            {categorias && categorias.map((categoria, index) => (
              <li key={`${categoria.nome}-${index}`}>{categoria.nome}</li>
            ))}
          </ul>

          <Link to="/cadastro/video">Novo vídeo</Link>
        </Main>
      </LayoutDefault>
    </>
  )
}

export default CadastroCategoria
