import React, { useContext } from 'react'
import logo from '../../images/logo.png'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../App'



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <>
            <div className='header'>
                <img src={logo} alt="{logo}" />

                <nav>
                    <NavLink className='a' activeStyle={{ border: '2px ridge goldenrod' }} to="/shop">Shop</NavLink>
                    <NavLink className='a' activeStyle={{ border: '2px ridge goldenrod' }} to="/review">Order Review</NavLink>
                    <NavLink className='a' activeStyle={{ border: '2px ridge goldenrod' }} to="/manage">Manage Inventory</NavLink>
                    <NavLink className='a' onClick={() => setLoggedInUser({})} to='/login'>Sign Out</NavLink>
                </nav>
            </div>
        </>
    )
}

export default Header





