import React, {Component} from 'react';
import './Book.css';


class Book extends Component {
    
  render() {
    return (
      <div className='Book'>
          <div className='Book__img'>
            <a href={this.props.books.volumeInfo.canonicalVolumeLink} target='_blank' rel='noopener noreferrer'>
                <img src={(this.props.books.volumeInfo.imageLinks === undefined ? '' : this.props.books.volumeInfo.imageLinks.thumbnail)} alt="Book Cover" />
            </a>
          </div>
          <div className='Book_info'>
              <h2>{this.props.books.volumeInfo.title}</h2>
              <p>Author: {(this.props.books.volumeInfo.authors === undefined ? 'No Info' : this.props.books.volumeInfo.authors[0])}</p>
              <p>Print Type: {this.props.books.volumeInfo.printType}</p> 
              <p>{this.props.books.volumeInfo.description}</p> 
          </div>
      </div>
    )
  }
}

export default Book;