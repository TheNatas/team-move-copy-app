import { NextPage } from "next";
import styles from "../styles/Login.module.css";
import { Form } from "react-bootstrap";
import LoginInfoMissing from "../components/LoginInfoMissing";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../components/Logo";
import InputGroup from "../components/InputGroup";
import AppHead from "../components/AppHead";
import BtnPrimary from "../components/BtnPrimary";
import FormLayout from "../components/FormLayout";

type loginInfo = {
  username: string,
  password: string
};

type errorDisplay = {
  displaying: boolean,
  missing: string
};

const Login : NextPage = () => {
  const [errorDisplay, setErrorDisplay] = useState<errorDisplay>({
    displaying: false,
    missing: ''
  });
  const [loginInfo, setLoginInfo] = useState<loginInfo>({
    username: '',
    password: ''
  });

  const handleChange = (e: any) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = () => {
    if (!loginInfo.username){
      setErrorDisplay({
        displaying: true,
        missing: 'o usuário'
      })
    }
    else if (!loginInfo.password){
      setErrorDisplay({
        displaying: true,
        missing: 'a senha'
      })
    }
    else{
      setErrorDisplay({
        displaying: false,
        missing: ''
      })
    }
  };

  return(
    <>
      <AppHead/>
      {errorDisplay.displaying && 
        <LoginInfoMissing missingInfo={errorDisplay.missing} 
          handleAnimationEnd={() => setErrorDisplay({
            displaying: false,
            missing: ''
          })}/>
      }
      <FormLayout>
        <Logo/>
        <Form>
          <InputGroup type="text" name="username" displayName="Usuário" value={loginInfo.username} handleChange={handleChange}/>
          <InputGroup type="password" name="password" displayName="Senha" value={loginInfo.password} handleChange={handleChange}/>

          <div className="d-grid gap-2">
            <BtnPrimary handleSubmit={handleSubmit} innerText="Entrar"/>
            <Link href={`/esqueci-minha-senha/login?username=${loginInfo.username}`}>
              <span className={styles.btn}>
                Esqueceu sua senha?
              </span>
            </Link>
          </div>
        </Form>
      </FormLayout>
      <span className={styles.version}>v0</span>
    </>
  )
}

export default Login;