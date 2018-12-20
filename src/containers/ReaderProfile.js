import React, {Component} from 'react'
import BookCard from '../components/BookCard'

class ReaderProfile extends Component {
  render() {
    return (
      <div>My profile
        <p>Books I've read:</p>
        <BookCard />
      </div>
    )
  }
}

export default ReaderProfile
