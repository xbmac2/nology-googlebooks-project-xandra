import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import BooksList from './containers/BooksList/BooksList'
import Footer from './components/Footer/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  //console.log(searchTerm)

  return (
    <>
      <Header setSearchTerm={setSearchTerm}/>
      <BooksList searchTerm={searchTerm}/>
      <Footer />
    </>
  )
}

export default App
