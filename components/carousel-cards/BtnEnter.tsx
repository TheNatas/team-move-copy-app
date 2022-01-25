import { NextPage } from "next";
import styles from "./btn-enter.module.css";

interface BtnEnterProps{
  last?: boolean
}

const BtnEnter : NextPage<BtnEnterProps> = ({last} : BtnEnterProps) => {
  return(
    <div className={`${styles.btnEnter} ${last ? styles.last : ''}`}>
      <span>Entrar agora</span>
    </div>
  )
}

export default BtnEnter;