import React from 'react'

const ReviewDetails = (props) => {
    return (
      <div className="ui list">
        <a className="item">
          <i className="book icon"></i>
          <div className="content">
            <div className="header">By {props.review.book.title}</div>
            <div className="description"> Reviewed by {props.review.reader.username} on {props.review.date}</div>
            <div className="description">{props.review.details}</div>
          </div>
        </a>
      </div>
    )
  }

export default ReviewDetails
