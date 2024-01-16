import BooksCard from "../../components/BooksCard/BooksCard"
import styles from "./BooksList.module.scss"

import { getBooksData } from "../../data/data"
import { useState, useEffect } from "react"

const BooksList = ({searchTerm}) => {
 
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
        />
        ))}
        <BooksCard />
        <BooksCard />
        <BooksCard />
        <BooksCard />
        <BooksCard /><BooksCard />

        <BooksCard />
        <BooksCard /><BooksCard />
        <BooksCard />
        <BooksCard />
        <BooksCard />
        <BooksCard />
        <BooksCard /><BooksCard />

        <BooksCard />
        <BooksCard /><BooksCard />
      </section>

      
    </div>
  )
}

export default BooksList