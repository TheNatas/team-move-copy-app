import { NextPage } from "next";
import cardStyles from "./cards.module.css";
import BtnEnter from "./BtnEnter";
import Layout from "./Layout";
import CardHeader from "./CardHeader";

type CardProps = {
  cardTitle: string,
  cardTitleColor: string,
  hasLogo?: boolean,
  paragraph?: string,
  imgPlaceholderColor: string,
  last?: boolean
};

const Card : NextPage<CardProps> = ({ cardTitle, cardTitleColor, hasLogo=false, paragraph='', imgPlaceholderColor, last=false }) => {
  return(
    <Layout>
      <CardHeader cardTitle={cardTitle} cardTitleColor={cardTitleColor} hasLogo={hasLogo} paragraph={paragraph}/>
      <div className={cardStyles.cardImgPlaceholder + ' ' + imgPlaceholderColor}></div>
      <BtnEnter last={last}/>
    </Layout>
  )
}

export default Card;