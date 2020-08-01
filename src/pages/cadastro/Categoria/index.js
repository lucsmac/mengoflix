import React from 'react'
import LayoutDefault from '../../../components/LayoutDefault'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm'
import Head from '../../../components/Head'
import categoriasAPI from '../../../respositories/categorias'

const Main = styled.main`
  background: var(--black);
  color: var(--white);
  padding: 50px 5%;
  flex: 1;
`

const CadastroCategoria = () => {

  const categoriaModel = {
    titulo: '',
    descricao: '',
    cor: '#000000'
  }

  const [categorias, setCategorias] = React.useState([])

  const { valorAtual, handleChange, clearForm } = useForm(categoriaModel)

  const handleSubmit = (e) => {
    e.preventDefault()

    categoriasAPI.create({
      titulo: valorAtual.titulo,
      descricao: valorAtual.descricao,
      cor: valorAtual.cor
    }).then((response) => {
      categoriasAPI.getAll().then((allCategories) => setCategorias(allCategories))
    })

    clearForm()
  }

  React.useEffect(() => {
    categoriasAPI.getAll().then((response) => setCategorias([...response]))
  }, [])

  return (
    <LayoutDefault>
      <Head title="Nova categoria" description="Cadastrar uma nova categoria" />

      <Main>
        <h1>Cadastro de categoria: {valorAtual.nome}</h1>

        <form onSubmit={handleSubmit}>

          <FormField id="titulo" value={valorAtual.titulo} type="text" onChange={handleChange}>Nome</FormField>

          <FormField id="descricao" value={valorAtual.descricao} type="textarea" onChange={handleChange}>Descrição</FormField>

          <FormField id="cor" value={valorAtual.cor} type="color" onChange={handleChange}>Cor</FormField>

          <Button as="button">
            Cadastrar
          </Button>
        </form>

        {!Boolean(categorias.length) && (<div>
          <p>Loading</p>
        </div>)}

        <ul style={{ listStyle: 'none' }}>
          <h2 style={{ fontWeight: 'bold' }}>Categorias atuais:</h2>
          {categorias && categorias.map((categoria, index) => (
            <li style={{ margin: '1rem', fontSize: '1rem' }} key={`${categoria.titulo}-${index}`}>- {categoria.titulo}</li>
          ))}
        </ul>

        <div>
          <p style={{ marginTop: '3.5rem' }}>Deseja criar um novo vídeo? </p>
          <Button as={Link} to="/cadastro/categoria" style={{ margin: '.4rem 0' }}>Novo vídeo</Button>
        </div>
      </Main>
    </LayoutDefault>
  )
}

export default CadastroCategoria
