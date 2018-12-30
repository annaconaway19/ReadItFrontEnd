import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={`ui inverted red menu navbar`}>
     <Link className="item" to='/readit/bookshelf' id='logo'>ReadIt</Link>
     <Link className="item" to='/readit/bookshelf'>Book Shelf</Link>
     <Link className="item" to='/readit/reviews'>My Reviews</Link>
     <Link className="item" to='/readit/profile'>My Profile</Link>
   </div>
  )
}

export default NavBar
