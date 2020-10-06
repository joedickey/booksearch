import React, {Component} from 'react';
import './SearchFilter.css';


class SearchFilter extends Component {


  render() {
    return (
      <div className='SearchFilter'>
          <form>
              <label htmlFor='filter'>Filter: </label>
              <select id='filter' name='filter' onChange={(e) => this.props.handleFilter(e.target.value)}>
                <option value='None'>Select one...</option>
                <option value='free-ebooks'>Free-Ebooks</option>
                <option value='paid-ebooks'>Paid-Ebooks</option>
              </select>
          </form>
      </div>
    )
  }
}

export default SearchFilter;