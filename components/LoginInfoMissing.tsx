import { NextPage } from "next";
import styles from "./login-info-missing.module.css";
import Image from "next/image";
import errorImg from "../public/error.png";

type LoginInfoMissingProps = {
  missingInfo: string,
  handleAnimationEnd: VoidFunction
}

const LoginInfoMissing : NextPage<LoginInfoMissingProps> = ({missingInfo, handleAnimationEnd}) => {
  return(
    <div className={styles.container} onAnimationEnd={handleAnimationEnd}>
      <div style={{margin: '1rem', width: errorImg.width, height: errorImg.height, display: 'inline-block'}}>
        <Image src={errorImg} alt="Aviso de erro"/>
      </div>
      <span className={styles.span}>{`Informe ${missingInfo}`}</span>
    </div>
  )
}

export default LoginInfoMissing;