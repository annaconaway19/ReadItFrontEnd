import React from 'react'
import { Redirect } from 'react-router-dom'

const ReaderProfile  = ({ currentReader }) => currentReader ? (
    <div className="profile">
      <img src={currentReader.img_url} className="ui medium circular image"/>
      <div className="ui compact segment">
        <h2 className='header'>{currentReader.name} (username: {currentReader.username})</h2>
        <div className='description'>
          {currentReader.bio}
        </div>
      </div>

      <div className="ui compact segment">
        Books I've Reviewed:
      </div>

    </div>
    )
 : <Redirect to='/readit/login' />

export default ReaderProfile
