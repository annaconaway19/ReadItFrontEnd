import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { withRouter } from 'react-router';

class ReaderProfile extends Component {
  constructor(){
    super()
    this.state = {
      allReaders: []
    }
  }


  deleteReader = (readerId) => {
    fetch(`http://localhost:3001/api/v1/readers/${readerId}`, {
      method: "DELETE",
    }).then(data => {
      let newReaders = this.state.allReaders.filter(reader => reader.id != readerId)
      this.setState({ allReaders: newReaders})
    }).then(this.props.history.push("/readit/login"))
  }

  fetchReaders = () => {
    fetch('http://localhost:3001/api/v1/readers')
    .then(res => res.json())
    .then(readers => this.setState({ allReaders: readers })
   )}

  deleteProf = () => {
    confirmAlert({
      title: 'Is this the last page of our story?',
      message: "Are you sure you want to delete your profile?",
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.deleteReader(this.props.currentReader.id)
        },
        {
          label: 'No',
          onClick: () => console.log('Whew!')
        }
      ]
    })
  };

  render(){
    return(
      <div className="reader-prof">
      {this.fetchReaders()}
      {this.props.currentReader ? (
        <div className="profile">
          <img alt="prof pic" src={this.props.currentReader.img_url} className="ui medium circular image"/>
          <div className="ui compact segment">
            <h2 className='header'>{this.props.currentReader.name} (username: {this.props.currentReader.username})</h2>
            <p>
              {this.props.currentReader.bio}
            </p>
          </div>

          <button className="ui button" onClick={this.deleteProf}>
            Delete My Account
          </button>


        </div>
        )
     : <Redirect to='/readit/login' />}
  </div>
  )
}
}

export default withRouter(ReaderProfile);
