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
        <Image src={errorImg}/>
      </div>
      <span style={{position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)', color: 'white'}}>{`Informe ${missingInfo}`}</span>
    </div>
  )
}

export default LoginInfoMissing;