import React, {Component} from 'react'

class BookCard extends Component {
  render() {
    return (
        <div className = "ui card">
          <div className='image'>
            <img alt='' src={this.props.book.img_url} />
          </div>
          <div className="content">
            <a className="header">{this.props.book.title}</a>
          </div>
          <div className="description">
            {this.props.book.description}
          </div>
        </div>
    )
  }
}

export default BookCard
