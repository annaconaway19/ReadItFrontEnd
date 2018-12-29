import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BookCard extends Component {
  render() {
    return (
        <div className = "ui card" >

            <Link to={`/readit/books/${this.props.book.id}`} className='image'>
              <img alt='' src={this.props.book.img_url} onClick={() => this.props.onSelectBook(this.props.book)} id={this.props.book.id}/>
            </Link>

          <div className="content">
            <a className="header">{this.props.book.title}</a>
          </div>

          <div className="content">
            By: {this.props.book.author}
            <p>{this.props.book.genre}</p>
          </div>

        </div>
    )
  }
}


export default BookCard
