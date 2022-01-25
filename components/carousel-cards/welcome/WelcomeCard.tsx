import { NextPage } from "next";
import WelcomeCardHeader from "./WelcomeCardHeader";
import cardStyles from "../cards.module.css";
import styles from "../../../styles/utils.module.css";
import BtnEnter from "../BtnEnter";
import Layout from "../Layout";

const WelcomeCard : NextPage = () => {
  return(
    <Layout>
      <WelcomeCardHeader/>
      <div className={cardStyles.cardImgPlaceholder + ' ' + styles.bgColorDarkGray}></div>
      <BtnEnter/>
    </Layout>
  )
}

export default WelcomeCard;