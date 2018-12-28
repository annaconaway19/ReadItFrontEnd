import React from 'react'

const ReviewDetails = (props) => {
    return (
      <div>
        <p>{props.review.details}</p>
        {props.review.reader.username} on {props.review.date}
        <br></br>
      </div>
    )
  }

export default ReviewDetails
