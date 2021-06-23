import React, {useState, useEffect} from 'react'
import './Review.css'
import {getDatabaseCart, processOrder, removeFromDatabaseCart} from '../../utilities/databaseManager'
import fakeData from '../../fakeData'
import ReviewItems from './ReviewItems'
import Cart from '../Cart/Cart'
import { useHistory } from "react-router-dom";



const Review = () => {
    const [cart, setCart] = useState([])

    const history = useHistory();

    const handleCheckOut = () =>{
        history.push('/shipment') 
    }

    const removeProduct = (productKey) =>{
        const newCart = cart.filter(product => product.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    } 

    useEffect(() => {
        const saveCart = getDatabaseCart()
        const productKeys = Object.keys(saveCart)
        const cartProducts = productKeys.map( key => {
            const product = fakeData.find(product => product.key === key)
            product.quantity = saveCart[key]
            return product
        })

        setCart(cartProducts)
    },[])

    return (
        <>
            <h1 style={{textAlign: 'center', color: 'tomato'}}>Cart Item: {cart.length}</h1>

            <div className="shop-container">
                <div className="product-container">
                {
                cart.map(pd => <ReviewItems key={pd.key} product={pd} removeProduct={removeProduct}/>)
                }
                </div>
                
                <div className="cart-container">
                    <Cart cart={cart} />
                    <button className='main-button'
                    onClick={handleCheckOut}
                    style={{marginLeft:'10px'}}>
                    <i className="fas fa-money-check-alt"></i> Check Out</button>
                </div>
            </div> 
        </>
    )
}

export default Review
