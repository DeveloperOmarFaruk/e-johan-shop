import React, { useState, useContext } from 'react';
import './LogIn.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { UserContext } from '../../App'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import {
    initializeLoginFramework,
    handleGoogleSignIn,
    handleSignOut,
    handleFbSignIn,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from './LoginManager'






const LogIn = () => {

    // Authentication Area Start
    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: ''
    })

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res)
        if (redirect) {
            history.replace(from);
        }
    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }


    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }


    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }




    // Authentication Area End



    // Input From Area Start
    const handleBlur = (e) => {
        let isFormValid = true;

        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+.\S+/.test(e.target.value)
        }

        if (e.target.name === 'password') {
            const isPasswordsValid = e.target.value.length > 6
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFormValid = isPasswordsValid && passwordHasNumber
        }

        if (isFormValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
        }
    }



    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        e.preventDefault()
    }





    return (
        <>
            <div className="login-container">
                {/* <h1 className="h1">React - Authentication</h1> */}
                {
                    user.isSignedIn ? <Button variant="warning" className='sign-in-btn' onClick={signOut}>Sign Out</Button> :
                        <Button variant="warning" className='sign-in-btn' onClick={googleSignIn}>
                            <i className="fab fa-google"></i> Sign In</Button>
                }

                {/* <Button
                    variant="warning"
                    className='sign-in-btn'
                    onClick={fbSignIn}>
                    <i className="fab fa-facebook-f"></i> Sign In</Button> */}
                {/* {
                    user.isSignedIn && <div className='info'>
                        <p className="p">Welcome, {user.name}</p>
                        <p className="p">Your email: {user.email}</p>
                        <img src={user.photo} alt='' className='login-image' />
                    </div>
                } */}

                <h2 className="h2">Our own Authentication</h2>

                <div className="user-permission">
                    <input
                        className="user-permission-input"
                        type='checkbox'
                        name='newUser'
                        id=''
                        onChange={() => setNewUser(!newUser)} />
                    <label className="label" htmlFor="newUser">New User Sign up</label>
                </div>

                <form onSubmit={handleSubmit}>

                    {
                        newUser &&
                        <input
                            className="user-input"
                            name='name'
                            type='text'
                            placeholder='Enter your Full Name...'
                            required
                            onBlur={handleBlur} />
                    }
                    <br /><br />

                    <input
                        className="user-input"
                        name='email'
                        type='text'
                        placeholder='xyz@gmail.com'
                        required
                        onBlur={handleBlur} />
                    <br /><br />


                    <input
                        className="user-input"
                        name='password'
                        type='password'
                        placeholder='Enter your password...'
                        required
                        onBlur={handleBlur} />
                    <br /><br />


                    <input type='submit' value={newUser ? 'Sign Up' : 'Sign In'} /><br />
                    <span className="span">{user.error}</span>
                    {user.success && <span style={{ color: 'green' }}>User {newUser ? "Created" : "Logged In"} Successfully</span>}
                </form>

            </div>
        </>
    )
}

export default LogIn