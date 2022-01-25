import { NextPage } from "next";
import Layout from "../Layout";
import StartNowCardHeader from "./StartNowCardHeader";
import cardStyles from "../cards.module.css";
import styles from "../../../styles/utils.module.css";
import BtnEnter from "../BtnEnter";

const StartNowCard : NextPage = () => {
  return(
    <Layout>
      <StartNowCardHeader/>
      <div className={`${cardStyles.cardImgPlaceholder} ${styles.bgColorGreen}`}></div>
      <BtnEnter last={true}/>
    </Layout>
  )
}

export default StartNowCard;