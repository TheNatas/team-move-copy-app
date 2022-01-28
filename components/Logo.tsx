import { NextPage } from "next";
import logo from "../public/logo.png";
import Image from "next/image";

const Logo : NextPage = () => {
  return(
    <div style={{position: 'relative', bottom: '2rem'}}>
      <Image src={logo}/>
    </div>
  )
}

export default Logo;