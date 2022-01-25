import { NextPage } from "next";
import Link from "next/link";
import styles from "./btn-enter.module.css";

interface BtnEnterProps{
  last?: boolean
}

const BtnEnter : NextPage<BtnEnterProps> = ({last} : BtnEnterProps) => {
  return(
    <div className={`${styles.btnEnter} ${last ? styles.last : ''}`}>
      <Link href="/login">
        <span>Entrar agora</span>
      </Link>
    </div>
  )
}

export default BtnEnter;