export const getFlowerBooksData = async () => {
  const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=4");
  const data = await response.json();
  //console.log(data.items[0]);
  //https://www.googleapis.com/books/v1/volumes?q=flowers
  //gives 10 results by default

  const cleanedData = data.items.map((book) => {
    return {
      key: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      //author is an array
      description: book.volumeInfo.description
    }
  })
  return cleanedData;
};

export const getBooksData = async (searchTerm) => {
  //console.log(searchTerm, "from function");
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
  const data = await response.json();
  //console.log(data.items[0]);
  //https://www.googleapis.com/books/v1/volumes?q=flowers
  //gives 10 results by default

  if (data.totalItems === 0) {
    return null;
  }

  const cleanedData = data.items.map((book) => {
    return {
      key: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      //author is an array
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail
    }
  })
  return cleanedData;
};

