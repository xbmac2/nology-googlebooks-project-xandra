import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import BooksList from './containers/BooksList/BooksList'
import Footer from './components/Footer/Footer';
import OverFooterWrapper from './containers/OverFooterWrapper/OverFooterWrapper';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <OverFooterWrapper>
        <Header setSearchTerm={setSearchTerm}/>
        <BooksList searchTerm={searchTerm}/>
      </OverFooterWrapper>
      <Footer />
    </>
  )
}

export default App
