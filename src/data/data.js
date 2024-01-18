export const getFlowerBooksData = async () => {
  const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=40");
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
      description: book.volumeInfo.description,

      publishedDate: book.volumeInfo.publishedDate,
      pages: book.volumeInfo.pageCount
    }
  })
  return cleanedData;
};

export const getBooksData = async (searchTerm) => {
  //console.log(searchTerm, "from function");
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=15&startIndex=0`);
  const data = await response.json();
  //console.log(data.items[0]);
  //https://www.googleapis.com/books/v1/volumes?q=flowers
  //gives 10 results by default

  //console.log(data);

  if (data.totalItems === 0) {
    console.log("No items to display");
    return null;
  }

  const cleanedData = data.items.map((book) => {
    return {
      key: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      //author is an array
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks?.smallThumbnail ?? "src/assets/default-image.png",
      publishedDate: book.volumeInfo.publishedDate,
      pages: book.volumeInfo.pageCount
    }
  })
  return cleanedData;
};

// https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=40&startIndex=41
//another function with start index

//this function will fetch the next 40 books with the searchTerm, depending on how many books in the booksFetched array in BooksList.jsx
export const getMoreBooksData = async (searchTerm, startIndex) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=15&startIndex=${startIndex}`);
  const data = await response.json();

  const cleanedData = data.items.map((book) => {
    return {
      key: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      //author is an array
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks?.smallThumbnail ?? "src/assets/default-image.png",
      publishedDate: book.volumeInfo.publishedDate,
      pages: book.volumeInfo.pageCount
    }
  })
  console.log(cleanedData, "getMoreBooks data")
  return cleanedData;
}