import BooksCard from "../../components/BooksCard/BooksCard"
import styles from "./BooksList.module.scss"

import { getBooksData, getMoreBooksData } from "../../data/data"
import { useState, useEffect } from "react"

const BooksList = ({searchTerm}) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
 
  const [booksFetched, setBooksFetched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (searchTerm) {
      setErrorMessage("");
      setBooksFetched([]);
      setIsLoading(true);
      getBooksData(searchTerm)
      .then((results) => {
      
      setBooksFetched(results);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
    }
    
  }, [searchTerm])


  const handleShowMoreBooks = () => {
    setIsLoading(true);
    let startIndex = booksFetched.length;

    getMoreBooksData(searchTerm, startIndex)
    .then((results) => {
      setIsLoading(false);
      setBooksFetched((prev) => {
        return prev.concat(results);
      })
    })
  };

  return (
    <div className={styles.container}>
      
      {booksFetched ? null : (<p>No books matched your search</p>)}
      {errorMessage && <p>{errorMessage}</p>}
      <section className={styles.books_section}>
        {booksFetched && booksFetched.map((book) => (
        <BooksCard 
        key={book.key}
        title={book.title}
        author={book.author}
        description={book.description}
        image={book.image}
        publishedDate={book.publishedDate}
        pages={book.pages}
        />
        ))}
        
      </section>
      {isLoading && <p>Loading...</p>}
      {booksFetched.length > 0 && <button onClick={handleShowMoreBooks}>Show more results</button>}
      {booksFetched.length > 0 && <p className={styles.to_top} onClick={scrollToTop}>Back to top</p>}
      
    </div>
  )
}

export default BooksList