import React from "react";

const bookFactory = (
  id,
  title,
  author,
  numberOfPages,
  read,
  deleteMark,
  unRead
) => {
  return { id, title, author, numberOfPages, read, deleteMark, unRead };
};

const tableRow = bookFactory(
  "id",
  "title",
  "author",
  "numberOfPages",
  "alreadyRead",
  "Delete",
  "Mark as (un)read"
);

const BookTable = ({ bookList, deleteBook, toggleBook }) => {
  return (
    <table className="table table-dark" style={{ marginTop: 15 }}>
      <thead>
        <tr>
          {tableRow &&
            Object.values(tableRow).map(col => (
              <th key={col} scope="col">
                {col}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {bookList.length > 0 &&
          bookList.map(book => (
            <tr>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.numberOfPages}</td>
              <td>{book.read}</td>
              <td>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => toggleBook(book.id)}>
                  Toggle Read Unread
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default BookTable;
