import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'


class ReviewDetails extends Component {

  handleDelete = (reviewId) => {
    fetch(`http://localhost:3001/api/v1/reviews/${reviewId}`, {
      method: "DELETE",
    }).then(data => {
      this.props.onDelete(data.id)
    }).then(this.props.history.push("/readit/bookshelf"))
  }

  render() {
    return (
      <div className="ui list">
      {this.props.renderUpdate()}
        <a href="item" className="item">
          <i className="book icon"></i>
        <Link to={`/readit/books/${this.props.review.book.id}`} className="content">
            <div className="header">{this.props.review.book.title}</div>
            <div className="description"> Reviewed by {this.props.review.reader.username} on {this.props.review.date}</div>
            <div className="description">{this.props.review.details}</div>
        </Link>
          <button className='delete-button' onClick={() => this.handleDelete(this.props.review.id)}>Delete This Review</button>

          <button id={this.props.review.id} onClick={(e) => {this.props.onEdit(e)}}>Edit This Review</button>
        </a>
      </div>
      )
    }
  }

export default withRouter(ReviewDetails);

// <Link to={`/readit/books/${this.props.book.id}`} className='image'>
//   <img alt='' src={this.props.book.img_url} onClick={() => this.props.onSelectBook(this.props.book)} id={this.props.book.id}/>
// </Link>
