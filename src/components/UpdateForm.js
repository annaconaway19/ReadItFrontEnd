import React, {Component} from 'react'

class UpdateForm extends Component {

  render(){
    return(
      <form className="ui form">
        <div className="field">
          <label>What'd you think?</label>
          <textarea placeholder="Loved it? Hated it? We want to know!" id="reviewDetails" value={this.props.reviewDetails} onChange={this.props.handleChange}></textarea>
        </div>
        <div className='field'>
          <label>Book Title</label>
          <input type="text" id='bookTitle' placeholder="Book Title" onChange={(e) => this.handleBookChange(e)}/>
        </div>
          <button className="ui button" type="submit">Update Review</button>
      </form>
    )
  }
}

export default UpdateForm
