import Book from "./book"
import books from "./books"

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <>
      <h1>amazon the top sold</h1>
      <section className="bookList">
        {books.map((item, index) => {
          return (
            <Book {...item} key={item.id} getBook={getBook} number={index} />
          )
        })}
      </section>
    </>
  )
}

export default BookList
