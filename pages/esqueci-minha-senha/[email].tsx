import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Form } from "react-bootstrap";
import AppHead from "../../components/AppHead";
import BtnPrimary from "../../components/BtnPrimary";
import FormLayout from "../../components/FormLayout";
import InputGroup from "../../components/InputGroup";
import backImg from "../../public/back.png";
import Logo from "../../components/Logo";
import Image from "next/image";
import Link from "next/link";

const ForgottenPassword : NextPage = () => {
  const router = useRouter();
  const [{ username }, setUsername] = useState(router.query);

  const handleChange = (e: any) => setUsername(e.target.value);

  return(
    <>
      <Link href='/login'>
        <div style={{position: 'absolute', top: 0, left: 0, margin: '1rem'}}>
          <Image src={backImg}/>
        </div>
      </Link>
      <FormLayout>
        <AppHead/>
        <Logo/>
        <Form>
          <InputGroup type="email" name="email" displayName="Digite o e-mail para alterar sua senha" value={username} handleChange={handleChange}/>
          <BtnPrimary handleSubmit={() => ''} innerText="Recuperar"/>
        </Form>
      </FormLayout>
    </>
  )
}

export default ForgottenPassword;