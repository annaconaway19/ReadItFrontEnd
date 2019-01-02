import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ logged_in, setCurrentReader }) => {
  let logout = () => {
    setCurrentReader(null)
    localStorage.clear()
  }

  return (
    <div className={`ui inverted red menu navbar`}>
    {logged_in ? (
      <React.Fragment>
         <Link className="item" to='/readit/bookshelf' id='logo'>ReadIt</Link>
         <Link className="item" to='/readit/bookshelf'>Book Shelf</Link>
         <Link className="item" to='/readit/reviews'>My Reviews</Link>
         <Link className="item" to='/readit/profile'>My Profile</Link>
         <Link className="item" to='/readit/login' onClick={logout}>Log Out</Link>
      </React.Fragment>
    ) : (
    <React.Fragment>
        <Link className="item" id='logo' to='/readit/login'>ReadIt</Link>
        <Link className="item" to='/readit/signup'>Sign Up</Link>
    </React.Fragment>
  )}
   </div>
   );
 };


export default NavBar
