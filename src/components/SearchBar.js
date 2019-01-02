import React, {Component} from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div>
      <h3>What are YOU reading?</h3>
        <div id='searchbar' className="ui icon input">
          <input type='text'placeholder="Find A Book by Title or Author" onChange={this.props.onChange}/>
          <i className="search icon"></i>
        </div>
      </div>
    )
  }
}

export default SearchBar
