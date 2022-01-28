import type { NextPage } from 'next'
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import AppHead from '../components/AppHead';
import Card from '../components/Card';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

const Home: NextPage = () => {
  const [index, setIndex] = useState(0);

  const { width } = useWindowDimensions();
  
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  }

  return (
    <>
      <AppHead/>
      <Carousel 
        activeIndex={index}
        onSelect={handleSelect}
        interval={null} 
        wrap={false}
        controls={width === undefined || width > 800}
        className={styles.container}
      >
        <Carousel.Item>
          <Card cardTitle='Bem-vindo(a) à' cardTitleColor={utilStyles.txtColorGray} imgPlaceholderColor={utilStyles.bgColorDarkGray} hasLogo={true}/>
        </Carousel.Item>
        <Carousel.Item>
          <Card cardTitle='Equipe' cardTitleColor={utilStyles.txtColorOrange} imgPlaceholderColor={utilStyles.bgColorOrange} paragraph='Acompanhe sua equipe administrando suas atividades e melhore seus resultados'/>
        </Carousel.Item>
        <Carousel.Item>
          <Card cardTitle='Resultados' cardTitleColor={utilStyles.txtColorLightOrange} imgPlaceholderColor={utilStyles.bgColorDarkOrange} paragraph='Seus resultados a qualquer momento e em qualquer lugar'/>
        </Carousel.Item>
        <Carousel.Item>
          <Card cardTitle='Mobilidade' cardTitleColor={utilStyles.txtColorYellow} imgPlaceholderColor={utilStyles.bgColorBrown} paragraph='Sua empresa no alcance de um toque'/>
        </Carousel.Item>
        <Carousel.Item>
          <Card cardTitle='Comece a usar agora' cardTitleColor={utilStyles.txtColorLightGreen} imgPlaceholderColor={utilStyles.bgColorGreen} paragraph='Desfrute de todas as vantagens do TeamMove' last={true}/>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Home;
