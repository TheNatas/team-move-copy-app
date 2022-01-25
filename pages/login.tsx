import { NextPage } from "next";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Login.module.css";
import logo from "../public/logo.png";
import { Button, Form } from "react-bootstrap";
import LoginInfoMissing from "../components/LoginInfoMissing";

const Login : NextPage = () => {
  return(
    <>
      <LoginInfoMissing missingInfo="o usuário"/>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo}/>
        </div>
        <Form>
          <Form.Group className="text-start" controlId="formBasicEmail">
            <Form.Control type="text" className={styles.input} required/>
            <Form.Label className={styles.label}>Usuário</Form.Label>
          </Form.Group>

          <Form.Group className="text-start" controlId="formBasicPassword">
            <Form.Control type="password" className={styles.input} required/>
            <Form.Label className={styles.label}>Senha</Form.Label>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" className={styles.btn} style={{backgroundColor: 'var(--orange-color)', borderColor: 'var(--orange-color)'}}>
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