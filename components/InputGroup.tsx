import { NextPage } from "next";
import { Form } from "react-bootstrap";
import styles from "./input-group.module.css";

type InputGroupProps = {
  type: string,
  name: string,
  displayName: string,
  value: string | string[] | undefined,
  handleChange: (e: any) => void
};

const InputGroup : NextPage<InputGroupProps> = ({ type, name, displayName, value, handleChange }) => {
  return(
    <Form.Group className="text-start mb-2" controlId={name}>
      <Form.Control type={type} className={styles.input} name={name} required 
        value={value}
        onChange={handleChange}/>
      <Form.Label className={styles.label}>{displayName}</Form.Label>
    </Form.Group>
  )
}

export default InputGroup;