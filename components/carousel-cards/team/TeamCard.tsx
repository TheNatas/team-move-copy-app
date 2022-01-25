import { NextPage } from "next";
import Layout from "../Layout";
import TeamCardHeader from "./TeamCardHeader";
import cardStyles from "../cards.module.css";
import styles from "../../../styles/utils.module.css";
import BtnEnter from "../BtnEnter";

const TeamCard : NextPage = () => {
  return(
    <Layout>
      <TeamCardHeader/>
      <div className={cardStyles.cardImgPlaceholder + ' ' + styles.bgColorOrange}></div>
      <BtnEnter/>
    </Layout>
  )
}

export default TeamCard;