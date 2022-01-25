import { NextPage } from "next";
import cardStyles from "../cards.module.css";
import styles from "../../../styles/utils.module.css";

const MobilityCardHeader : NextPage = () => {
  return(
    <div className={cardStyles.cardHeader}>
      <h4 className={`${cardStyles.cardHeaderTitle} ${styles.txtColorYellow}`}>Mobilidade</h4>
      <p className={styles.txtColorGray}>Sua empresa no alcance de um toque</p>
    </div>
  )
}

export default MobilityCardHeader;