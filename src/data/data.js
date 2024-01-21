export const getBooksData = async (searchTerm) => {
  
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=15&startIndex=0`);
  const data = await response.json();

  if (data.totalItems === 0) {
    throw new Error("No books matched your search")
  };

  // if (data.error.code === 429) {
  //   throw new Error("Google Books is fielding too many searches. Try again later.")
  // }

  const cleanedData = data.items.map((book) => {
    return {
      key: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks?.smallThumbnail ?? "/default-image.png",
      publishedDate: book.volumeInfo.publishedDate,
      pages: book.volumeInfo.pageCount
    }
  })
  return cleanedData;
};

export const getMoreBooksData = async (searchTerm, startIndex) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=15&startIndex=${startIndex}`);
  const data = await response.json();

  const cleanedData = data.items.map((book) => {
    return {
      key: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks?.smallThumbnail ?? "/default-image.png",
      publishedDate: book.volumeInfo.publishedDate,
      pages: book.volumeInfo.pageCount
    }
  })
  return cleanedData;
}