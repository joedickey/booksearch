import React, {Component} from 'react';
import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox.js';
import SearchFilter from '../SearchFilter/SearchFilter.js';



class SearchBar extends Component {

  render() {
    return (
      <div className='SearchBar'>
            <SearchBox 
                handleClick={this.props.handleClick}/>
            <SearchFilter
                handleFilter={this.props.handleFilter} />
      </div>
    )
  }
}

export default SearchBar;