import { NextPage } from "next";
import { ElementType } from "react";
import { Button } from "react-bootstrap";
import styles from "./btn-primary.module.css";

type BtnProps = {
  handleSubmit?: () => void,
  innerText: string
};

const BtnPrimary : NextPage<BtnProps> = ({ handleSubmit, innerText }) => {
  return(
    <Button onClick={handleSubmit} variant="primary" className={styles.btn}>
      {innerText}
    </Button>
  )
}

export default BtnPrimary;