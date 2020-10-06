import React, {Component} from 'react';
import './App.css';
import Booklist from './Booklist/Booklist';
import SearchBar from './SearchBar/SearchBar';


class App extends Component {

  componentDidMount() {
    console.log('mounted')
  }
  componentDidUpdate() {
    let query = this.state.searchTerm
    let filter = this.state.filter === 'none' ? '' : (this.state.filter === 'free-ebooks' ? `&filter=free-ebooks` : `&filter=paid-ebooks`)
    const key = 'AIzaSyCQDgE3cmsbyWjN7Zx65_ryW7kXK7KMBBg'
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}${filter}`

    fetch(url)
      .then(response => {
        if(!response.ok){
          throw new Error(`Something went wrong: Status ${response.status}`)
        }
          return response
      })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        this.setState({
          books: responseJson.items
        })
      })
      .catch(err => {
        console.log(err.message)
        this.setState({
          error: err.message
        });
      })
  }

  handleClick = (input) => {
    this.setState({
      searchTerm: input
    })
  }

  handleFilter = (input) => {
    this.setState({
      filter: input
    })
  }
  

  render() {
    const errorMessage = this.state.error 
          ? <p>{this.state.error}</p> 
          : ''

    return (
      <div className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar 
            handleClick={this.handleClick} 
            handleFilter={this.handleFilter}/>
        {errorMessage}
        <Booklist books={this.state.books} />
      </div>
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: null,
      searchTerm: '',
      filter: 'none'
    }
  }
}


export default App;
