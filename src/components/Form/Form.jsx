import { useRef } from "react";
import styles from "./Form.module.scss"

const Form = ({setSearchTerm}) => {

  const searchRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchRef.current.value)
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" ref={searchRef} className={styles.search_box} placeholder="Enter keywords..."/>
      <button type="submit">Search</button>
    </form>
  )
}

export default Form