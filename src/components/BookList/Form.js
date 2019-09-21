import React, { useState, useEffect } from "react";

const bookFactory = (id, title, author, numberOfPages, read) => {
  return { id, title, author, numberOfPages, read };
};

const AddForm = props => {
  const [submitButton, setSubmitButtonEnable] = useState(true);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [read, setRead] = useState(false);

  useEffect(() => {
    if (title.trim() && author.trim()) {
      setSubmitButtonEnable(false);
    } else {
      setSubmitButtonEnable(true);
    }

    return () => setSubmitButtonEnable(true);
  }, [title, author]);

  const addBook = () => {
    let bookId = +props.bookListLength + 1;
    const createBook = bookFactory(
      bookId,
      title,
      author,
      +numberOfPages,
      read.toString()
    );
    setSubmitButtonEnable(true);
    setTitle("");
    setAuthor("");
    setNumberOfPages(0);
    setRead(false);
    props.bookData(createBook);
  };

  return (
    <form>
      <div className="row">
        <div className="col-xs-6 col-sm-6">
          <input
            value={title}
            name="title"
            type="text"
            className="form-control"
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="col-xs-6 col-sm-6">
          <input
            value={author}
            name="author"
            type="text"
            className="form-control"
            placeholder="Author"
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-xs-6 col-sm-6">
          <input
            value={numberOfPages}
            name="numberOfPages"
            type="number"
            className="form-control"
            placeholder="Number of pages"
            onChange={e => setNumberOfPages(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-xs-12 col-sm-12 text-left">
          <div>
            <input
              value={read}
              name="read"
              type="checkbox"
              id="customControlAutosizing"
              onChange={e => setRead(e.target.checked)}
            />
            <label htmlFor="customControlAutosizing">Already Read</label>
          </div>
        </div>
      </div>
      <br />
      <div className="row text-left">
        <div className="col-xs-12 col-sm-12">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => addBook()}
            disabled={submitButton}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddForm;
