import type { NextPage } from 'next'
import { ReactNode, SyntheticEvent, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import MobilityCard from '../components/carousel-cards/mobility/MobilityCard';
import ResultsCard from '../components/carousel-cards/results/ResultsCard';
import StartNowCard from '../components/carousel-cards/start-now/StartNowCard';
import TeamCard from '../components/carousel-cards/team/TeamCard';
import WelcomeCard from '../components/carousel-cards/welcome/WelcomeCard';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [index, setIndex] = useState(0);

  const { width } = useWindowDimensions();
  
  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  }

  return (
    <Carousel 
      activeIndex={index}
      onSelect={handleSelect}
      interval={null} 
      wrap={false}
      controls={width === undefined || width > 800}
      className={styles.container}
    >
      <Carousel.Item>
        <WelcomeCard/>
      </Carousel.Item>
      <Carousel.Item>
        <TeamCard/>
      </Carousel.Item>
      <Carousel.Item>
        <ResultsCard/>
      </Carousel.Item>
      <Carousel.Item>
        <MobilityCard/>
      </Carousel.Item>
      <Carousel.Item>
        <StartNowCard/>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home;
