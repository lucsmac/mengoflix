import React from 'react'
import LayoutDefault from '../../../components/LayoutDefault'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import FormField from '../../../components/FormField'
import useForm from '../../../hooks/useForm'
import Button from '../../../components/Button'
import Head from '../../../components/Head'
import videosAPI from '../../../respositories/videos'
import categoriasAPI from '../../../respositories/categorias'

const Main = styled.main`
  background: var(--black);
  color: var(--white);
  padding: 50px 5%;
  flex: 1;
`

const CadastroVideo = () => {
  const history = useHistory()
  const videoModel = {
    titulo: '',
    link: '',
    categoria: ''
  }
  const { valorAtual, handleChange } = useForm(videoModel)
  const [categorias, setCategorias] = React.useState([])
  const categoriasTitulos = categorias.map((categoria) => categoria.titulo)

  React.useEffect(() => {
    categoriasAPI.getAll()
      .then((response) => {
        setCategorias(response)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const categoriaId = categorias.find((categoria) => categoria.titulo === valorAtual.categoria)

    videosAPI.create({
      titulo: valorAtual.titulo,
      url: valorAtual.link,
      categoriaId: categoriaId.id
    })

    history.push('/')
  }

  return (
    <LayoutDefault>
      <Head title="Novo vídeo" description="Cadastro de um novo vídeo" />

      <Main>
        <h1>Cadastro de vídeo</h1>
        <form onSubmit={handleSubmit}>
          <FormField id="titulo" value={valorAtual.titulo} type="text" onChange={handleChange}>Título</FormField>
          <FormField id="link" value={valorAtual.link} type="text" onChange={handleChange}>Link</FormField>
          <FormField id="categoria" value={valorAtual.categoria} type="text" onChange={handleChange} suggestions={categoriasTitulos}>Categoria</FormField>

          <Button as="button">Cadastrar vídeo</Button>

        </form>

        <div>
          <p style={{ marginTop: '3.5rem' }}>Deseja criar uma nova categoria? </p>
          <Button as={Link} to="/cadastro/categoria" style={{ margin: '.4rem 0' }}>Nova categoria</Button>
        </div>
      </Main>
    </LayoutDefault>
  )
}

export default CadastroVideo
