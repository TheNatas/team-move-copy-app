import { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import logo from "../public/logo.png";
import { Button, Form } from "react-bootstrap";
import LoginInfoMissing from "../components/LoginInfoMissing";
import React, { useState } from "react";

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

  const handleChange = (e: any) => setLoginInfo({
    ...loginInfo,
    [e.target.name]: e.target.value
  });

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
      {errorDisplay.displaying && 
        <LoginInfoMissing missingInfo={errorDisplay.missing} 
          handleAnimationEnd={() => setErrorDisplay({
            displaying: false,
            missing: ''
          })}/>
      }
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo}/>
        </div>
        <Form>
          <Form.Group className="text-start" controlId="formBasicUsername">
            <Form.Control type="text" className={styles.input} name="username" required 
              value={loginInfo.username} 
              onChange={handleChange}/>
            <Form.Label className={styles.label}>Usuário</Form.Label>
          </Form.Group>

          <Form.Group className="text-start" controlId="formBasicPassword">
            <Form.Control type="password" className={styles.input} name="password" required 
              value={loginInfo.password} 
              onChange={handleChange}/>
            <Form.Label className={styles.label}>Senha</Form.Label>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button onClick={handleSubmit} variant="primary" className={`${styles.btn} ${styles.btnLogin}`}>
              Entrar
            </Button>
            <span className={styles.btn}>
              Esqueceu sua senha?
            </span>
          </div>
        </Form>
      </div>
      <span className={styles.version}>v0</span>
    </>
  )
}

export default Login;