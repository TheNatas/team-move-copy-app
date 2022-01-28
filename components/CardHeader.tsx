import { NextPage } from "next";
import Image from "next/image";

import logo from "../public/logo.png";

import styles from "../styles/utils.module.css";
import cardStyles from "./cards.module.css";

type CardHeaderProps = {
  cardTitle: string,
  cardTitleColor: string,
  hasLogo?: boolean,
  paragraph?: string
};

const CardHeader : NextPage<CardHeaderProps> = ({ cardTitle, cardTitleColor, hasLogo=false, paragraph='' }) => {
  return(
    <div className={cardStyles.cardHeader}>
      <h4 className={`${cardStyles.cardHeaderTitle} ${cardTitleColor}`}>{cardTitle}</h4>
      {hasLogo ? 
      <Image src={logo} alt="Team Move logo"/> : 
      <p className={styles.txtColorGray}>{paragraph}</p>}
    </div>
  )
}

export default CardHeader;