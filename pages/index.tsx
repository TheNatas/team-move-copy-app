import type { NextPage } from 'next'
import { ReactNode, SyntheticEvent, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import MobilityCard from '../components/carousel-cards/mobility/MobilityCard';
import ResultsCard from '../components/carousel-cards/results/ResultsCard';
import StartNowCard from '../components/carousel-cards/start-now/StartNowCard';
import TeamCard from '../components/carousel-cards/team/TeamCard';
import WelcomeCard from '../components/carousel-cards/welcome/WelcomeCard';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
    console.log(e);
    // TODO: limit the carousel when on the first or last item
  }

  return (
    <Carousel 
      activeIndex={index}
      onSelect={handleSelect}
      interval={null} 
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
