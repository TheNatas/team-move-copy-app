import { NextPage } from "next";
import Layout from "../Layout";
import ResultsCardHeader from "./ResultsCardHeader";
import cardStyles from "../cards.module.css";
import styles from "../../../styles/utils.module.css";
import BtnEnter from "../BtnEnter";

const ResultsCard : NextPage = () => {
  return(
    <Layout>
      <ResultsCardHeader/>
      <div className={cardStyles.cardImgPlaceholder + ' ' + styles.bgColorDarkOrange}></div>
      <BtnEnter/>
    </Layout>
  )
}

export default ResultsCard;