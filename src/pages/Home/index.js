import React from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categorias from '../../respositories/categorias'
import Head from '../../components/Head';
import LayoutDefault from '../../components/LayoutDefault';

function Home() {
  const [videos, setVideos] = React.useState([])

  React.useEffect(() => {
    categorias.getAllWithVideos().then((response) => {
      setVideos(response)
    }).catch((err) => console.log(err))
  }, [])

  return (
    <LayoutDefault>
      <Head title="Ínicio" description="A galeria de vídeos do mais querido" />

      <BannerMain
        videoTitle="Sem filtro: Flamengo"
        videoDescription="Em 2019, registramos a jornada do Flamengo na Libertadores. Mostramos bastidores e cenas inéditas da conquista da América em uma série de 7 episódios, que agora virou filme!"
        url="https://www.youtube.com/watch?v=uDZPSAXsqhI"
      />

      {Boolean(videos.length === 0) && <div style={{ color: 'white' }}>Loading...</div>}

      {Boolean(videos.length >= 1) && videos.map((categoria, index) => (
        <Carousel
          key={`${categoria.titulo}-${index}`}
          category={categoria}
        />
      ))}
    </LayoutDefault>
  );
}

export default Home;
