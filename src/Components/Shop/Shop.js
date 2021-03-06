import React, {useState, useEffect} from 'react'
import './Shop.css'
import fakeData from '../../fakeData/index'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager'
import {Link} from 'react-router-dom'






const Shop = () => {
    const first10 = fakeData.slice(0,30);
    const [products, setProducts] = useState(first10)
    
    useEffect(() =>{
        const saveCart = getDatabaseCart()
        const productKeys = Object.keys(saveCart)
        const previousCart = productKeys.map( existingKey => {
        const product = fakeData.find(pd  => pd.key === existingKey)
        product.quantity = saveCart[existingKey]
        return product;
        })

        setCart(previousCart)
    }, [])

    const handleAddProduct = (product) =>{
        const toBeAddedKey = product.key
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey)
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProduct]
        }

        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart)
        addToDatabaseCart(product.key, count)
    }

    const [cart, setCart] = useState([])
    
    
    return (
        <div className='shop-container'>
            <div className="product-container">

            {
                products.map(product => <Product 
                    key={product.key}
                    showAddToCart={true}
                    showAddToDetails={false}
                    handleAddProduct = {handleAddProduct}
                    product={product}/>)
            }
            </div>


            <div className="cart-container">
                <Cart cart={cart} product={products}>
                <Link to='/review'>
                <button className='main-button'><i className="fas fa-paper-plane"></i> Order Review</button>
                </Link>
                </Cart>
            </div>  
        </div>
    )
}

export default Shop




