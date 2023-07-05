const Book = ({ img, title, author, publisher, getBook, id, number }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{publisher}</p>
      <button onClick={() => getBook(id)}>display title</button>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  )
}

export default Book
