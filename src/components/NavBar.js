import React, {Component} from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={`ui inverted red menu navbar`}>
     <Link className="ui header" to='/readit'>ReadIt</Link>
     <Link className="item" to='/readit'>Book Shelf</Link>
     <Link className="item" to='/reviews'>My Reviews</Link>
     <Link className="item" to='/readers/:username'>My Profile</Link>
   </div>
  )
}

export default NavBar
