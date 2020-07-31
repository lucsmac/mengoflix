import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import data from './data/dados_iniciais.json'
import Head from './components/Head';

function App() {
  const videos = data

  console.log(videos)

  return (
    <div style={{ background: '#141414' }}>
      <Head title="Ínicio" description="A galeria de vídeos do mais querido" />

      <Menu />

      <BannerMain
        videoTitle="Sem filtro: Flamengo"
        videoDescription="Em 2019, registramos a jornada do Flamengo na Libertadores. Mostramos bastidores e cenas inéditas da conquista da América em uma série de 7 episódios, que agora virou filme!"
        url="https://www.youtube.com/watch?v=uDZPSAXsqhI"
      />

      {videos.categorias.map((categoria) => (
        <Carousel
          category={categoria}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
