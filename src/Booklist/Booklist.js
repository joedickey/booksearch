import React, {Component} from 'react';
import './Booklist.css';
import Book from '../Book/Book.js';


class Booklist extends Component {
  render() {
    const books = this.props.books.map((book, index) => {
        return <Book books={book} key={index} />})

    return (
      <div className='Booklist'>
          {books}
      </div>
    )
  }
}

export default Booklist;