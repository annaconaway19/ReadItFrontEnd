import React from 'react'
import BookCard from '../components/BookCard'
import { Redirect } from 'react-router-dom'

const ReaderProfile  = ({ currentUser }) => currentUser ? (
      <div className='ui card'>
        <image src={currentUser.img_url} className="image"/>
        <h2 className='header'>{currentUser.name} - {currentUser.username}</h2>
        <div className='description'>
          {currentUser.bio}
        </div>
      </div>
    )
 : <Redirect to='/readit/' />

export default ReaderProfile
