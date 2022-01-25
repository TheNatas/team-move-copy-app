import { NextPage } from "next";
import Image from "next/image";

import logo from "../../../public/logo.png";

import styles from "../../../styles/utils.module.css";
import cardStyles from "../cards.module.css";

const WelcomeCardHeader : NextPage = () => {
  return(
    <div className={cardStyles.cardHeader}>
      <h4 className={`${cardStyles.cardHeaderTitle} ${styles.txtColorGray}`}>Bem-vindo(a) à</h4>
      <Image src={logo}/>
    </div>
  )
}

export default WelcomeCardHeader;