import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import BooksList from './containers/BooksList/BooksList'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  //console.log(searchTerm)

  return (
    <>
      <Header setSearchTerm={setSearchTerm}/>
      <BooksList searchTerm={searchTerm}/>
    </>
  )
}

export default App
