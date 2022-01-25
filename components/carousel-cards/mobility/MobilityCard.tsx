import { NextPage } from "next";
import Layout from "../Layout";
import MobilityCardHeader from "./MobilityCardHeader";
import cardStyles from "../cards.module.css";
import styles from "../../../styles/utils.module.css";
import BtnEnter from "../BtnEnter";

const MobilityCard : NextPage = () => {
  return(
    <Layout>
      <MobilityCardHeader/>
      <div className={`${cardStyles.cardImgPlaceholder} ${styles.bgColorBrown}`}></div>
      <BtnEnter/>
    </Layout>
  )
}

export default MobilityCard;