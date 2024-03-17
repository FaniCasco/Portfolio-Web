import React from 'react';
import Layout from '../components/Layout.jsx';
import TextAnimation from '../components/TextAnimation.jsx';
import CardHome from '../components/CardHome.jsx';
import ImageText from '../components/ImageText.jsx';


function Home() {
  return (
    <Layout>

      <h2>
        <TextAnimation text="Bienvenidos a mi Portfolio" />
      </h2>
      <CardHome />
      <ImageText />
     


    </Layout>
  );
}

export default Home;



