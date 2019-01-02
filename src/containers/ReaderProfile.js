import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

class ReaderProfile extends Component {

  deleteProf = () => {
    confirmAlert({
      title: 'Is this the last page of the story?',
      message: "Are you sure you want to delete your profile?",
      buttons: [
        {
          label: 'Yes',
          onClick: () => console.log('Goodbye!')
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

export default ReaderProfile
