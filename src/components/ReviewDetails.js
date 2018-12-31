import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class ReviewDetails extends Component {


  render() {
    return (
      <div className="ui list">
        <a className="item">
          <i className="book icon"></i>
        <Link to={`/readit/books/${this.props.review.book.id}`} className="content">
            <div className="header">{this.props.review.book.title}</div>
            <div className="description"> Reviewed by {this.props.review.reader.username} on {this.props.review.date}</div>
            <div className="description">{this.props.review.details}</div>
        </Link>
          <button className='delete-button' onClick={() => this.props.onDelete(this.props.review.id)}>Delete This Review</button>
          <button id={this.props.review.id} onClick={(e) => this.props.onEdit(e)} >Edit This Review</button>
        </a>
      </div>
      )
    }
  }

export default ReviewDetails

// <Link to={`/readit/books/${this.props.book.id}`} className='image'>
//   <img alt='' src={this.props.book.img_url} onClick={() => this.props.onSelectBook(this.props.book)} id={this.props.book.id}/>
// </Link>
