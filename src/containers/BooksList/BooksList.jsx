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

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);
      getBooksData(searchTerm).then((results) => {
      setIsLoading(false);
      setBooksFetched(results);
    })
    }
    
  }, [searchTerm])

  //let booksToDisplay = [...booksFetched];

  //console.log(booksFetched,"booksFeched array")

  

  const handleShowMoreBooks = () => {
    setIsLoading(true);
    let startIndex = booksFetched.length;

    console.log(startIndex, "start index");
    getMoreBooksData(searchTerm, startIndex).then((results) => {
      setIsLoading(false);
      //console.log(results);
      // setBooksFetched((prev) => {
      //   return [...prev, ...results];
      // })
      setBooksFetched((prev) => {
        console.log(prev, "prev");
        console.log(prev.concat(results), "concated");
        return prev.concat(results);
      })
    })
  };

  
  console.log(booksFetched,"booksFetched array")

  return (
    <div className={styles.container}>
      {isLoading && <p>Loading...</p>}
      {booksFetched ? null : (<p>No books matched your search</p>)}
      <section className={styles.books_section2}>
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
      <button onClick={handleShowMoreBooks}>Show more results</button>
      <p className={styles.to_top} onClick={scrollToTop}>Back to top</p>
    </div>
  )
}

export default BooksList