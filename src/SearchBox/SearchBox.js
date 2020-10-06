import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    updateSearch = (input) => {
        this.setState({
            query: input
        })
     }

  render() {
    return (
      <div className='SearchBox'>
          <form className='SearchBox__form'>
                <label htmlFor='search'>Search:</label>
                <input type='text' name='search' id='search' placeholder='Enter Keyword' value={this.state.query} onChange={e => this.updateSearch(e.target.value)}/>
                <button type='button' onClick={() => this.props.handleClick(this.state.query)}>
                  Submit
                </button>
          </form>
      </div>
    )
  }
}

export default SearchBox;