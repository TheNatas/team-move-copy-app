import { NextPage } from "next";
import cardStyles from "../cards.module.css";
import styles from "../../../styles/utils.module.css";

const StartNowCardHeader : NextPage = () => {
  return(
    <div className={cardStyles.cardHeader}>
      <h4 className={`${cardStyles.cardHeaderTitle} ${styles.txtColorLightGreen}`}>Comece a usar agora</h4>
      <p className={styles.txtColorGray}>Desfrute de todas as vantagens do TeamMove</p>
    </div>
  )
}

export default StartNowCardHeader;