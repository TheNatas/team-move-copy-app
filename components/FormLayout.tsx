import { NextPage } from "next";
import { PropsWithChildren } from "react";
import styles from "./form-layout.module.css";

const FormLayout : NextPage<PropsWithChildren<{}>> = ({ children }) => {
  return(
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default FormLayout;