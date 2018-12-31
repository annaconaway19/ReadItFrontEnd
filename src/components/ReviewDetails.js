import React from 'react'
import { Link } from 'react-router-dom'


const ReviewDetails = (props) => {
    return (
      <div className="ui list">
        <a className="item">
          <i className="book icon"></i>
        <Link to={`/readit/books/${props.review.book.id}`} className="content">
            <div className="header">{props.review.book.title}</div>
            <div className="description"> Reviewed by {props.review.reader.username} on {props.review.date}</div>
            <div className="description">{props.review.details}</div>
        </Link>
          <button className='delete-button' onClick={() => props.onDelete(props.review.id)}>Delete This Review</button>
        </a>
      </div>
    )
  }

export default ReviewDetails

// <Link to={`/readit/books/${this.props.book.id}`} className='image'>
//   <img alt='' src={this.props.book.img_url} onClick={() => this.props.onSelectBook(this.props.book)} id={this.props.book.id}/>
// </Link>
