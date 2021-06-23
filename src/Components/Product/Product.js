import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'






const Product = (props) => {

    const {product, handleAddProduct, showAddToDetails, showAddToCart} = props
    const {img, name, seller, price, stock, key, category, wholePrice, star, starCount, priceFraction} = product




    return (
        <div className='product'>
            
            <div>
                <img src={img} alt=''/>
            </div>


            <div>
            <h4 className='product-name'>
                <Link to={"/product/"+ key}> {name}</Link>
            </h4>
            <br/>

            <p><small>By: {seller}</small></p>
            {
                showAddToDetails === true &&
                <>
                <p><small>Category: {category}</small></p>
                </>
            }
            <p>Price: ${price}</p>
            {
                showAddToDetails === true &&
                <>
                <p><small>Whole Price: ${wholePrice}</small></p>
                <p><small>Price Fraction: ${priceFraction}</small></p>
                </>
            }
            <p>{star} 	&#11088; 	&#11088; 	&#11088;</p>
            {
                showAddToDetails === true &&
                <>
                <p>Star Count: {starCount} 	&#11088;</p>
                </>
            }
            
            <br/>
            <p><small>Only {stock} left in stock - Order soon . . .</small></p>
            {
                showAddToCart === true &&
                <button className='main-button' 
            onClick={() => handleAddProduct(product)}>
                <i className="fas fa-cart-arrow-down"></i> Add to Cart</button>
            }
            </div>
        </div>
    )
}

export default Product





