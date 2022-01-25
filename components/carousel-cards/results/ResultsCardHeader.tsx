import { NextPage } from "next";
import cardStyles from "../cards.module.css";
import styles from "../../../styles/utils.module.css";

const ResultsCardHeader : NextPage = () => {
  return(
    <div className={cardStyles.cardHeader}>
      <h4 className={`${cardStyles.cardHeaderTitle} ${styles.txtColorLightOrange}`}>Resultados</h4>
      <p className={styles.txtColorGray}>Seus resultados a qualquer momento e em qualquer lugar</p>
    </div>
  )
}

export default ResultsCardHeader;