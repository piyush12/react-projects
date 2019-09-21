import React from "react";
import AddForm from "./Form";
import BookTable from "./Table";

class BookList extends React.Component {
  state = {
    bookData: []
  };

  addBook = bookdata => {
    const bookData = [...this.state.bookData];
    bookData.push(bookdata);
    this.setState({
      bookData: [...bookData]
    });
  };

  deleteBook = id => {
    const copyBook = [...this.state.bookData];
    const deletedBook = copyBook.filter(book => book.id !== id);

    this.setState({
      bookData: [...deletedBook]
    });
  };

  toggleBook = id => {
    const copyBook = [...this.state.bookData];
    copyBook.map(book => {
      if (book.id === id) {
        if (book.read === "false") {
          book.read = "true";
        } else {
          book.read = "false";
        }
      }
      return book;
    });
    this.setState({
      bookData: [...copyBook]
    });
  };

  render() {
    return (
      <React.Fragment>
        <h4>Book List</h4>
        <AddForm
          bookData={this.addBook}
          bookListLength={this.state.bookData.length}
        />
        <BookTable
          bookList={this.state.bookData}
          deleteBook={this.deleteBook}
          toggleBook={this.toggleBook}
        />
      </React.Fragment>
    );
  }
}

export default BookList;
