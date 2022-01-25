import { NextPage } from "next";
import Image from "next/image";
import errorImg from "../public/error.png";

type LoginInfoMissingProps = {
  missingInfo: string
}

const LoginInfoMissing : NextPage<LoginInfoMissingProps> = ({missingInfo}) => {
  return(
    <div style={{position: 'absolute', top: 0, backgroundColor: 'var(--light-red-color)', width: '100%', textAlign: 'start'}}>
      <div style={{margin: '1rem', width: 'fit-content'}}>
        <Image src={errorImg}/>
      </div>
      <span style={{position: 'absolute', top: '50%', left: '37.5%', transform: 'translate(-50%, -50%)'}}>{`Informe ${missingInfo}`}</span>
    </div> // TODO: make it visible just temporarily after error and decide over its size
  )
}

export default LoginInfoMissing;