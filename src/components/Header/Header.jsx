import Form from "../Form/Form"
import styles from "./Header.module.scss"

const Header = ({setSearchTerm}) => {

  

  return (
    <header className={styles.container}>
      <h1 >The Sunlit Library</h1>
      <p>Search the Google Books database below to find your next read</p>
      
      <Form setSearchTerm={setSearchTerm}/>
    </header>
  )
}

export default Header