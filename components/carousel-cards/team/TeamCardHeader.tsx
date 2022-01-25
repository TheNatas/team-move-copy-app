import { NextPage } from "next";
import styles from "../../../styles/utils.module.css";
import cardStyles from "../cards.module.css";

const TeamCardHeader : NextPage = () => {
  return(
    <div className={cardStyles.cardHeader}>
      <h4 className={`${cardStyles.cardHeaderTitle} ${styles.txtColorOrange}`}>Equipe</h4>
      <p className={styles.txtColorGray}>Acompanhe sua equipe administrando suas atividades e melhore seus resultados</p>
    </div>
  )
}

export default TeamCardHeader;