import React from 'react'
import { Link } from 'react-router-dom'

//To update the value of Item instantly 
import { useSelector } from 'react-redux'
//useSelector hook is used to get the state from the redux store


const Navbar = () => {

  const items = useSelector( (state) => state.cart)


  return (
    <div className='nav-Container'>

        <span className='logo'>Shop Redux</span>
        
        <div>

            <Link to="/" className='navLink'> Home</Link>
            <Link to="/cart" className='navLink'> Cart</Link> 

            <span className='cartCount'> Cart Count:  {items.length} </span>

        </div>


    </div>
  )
}

export default Navbar