import React from 'react'


const ReviewItems = (props) => {

    const {product, removeProduct} = props
    const {name, img, seller,price,star,stock,quantity, key} = product
    
    return (
        <>
            <div className="product">
            <div>
                <img src={img} alt=''/>
            </div>

            <div>
            <h4 className='product-name'>
                {name}
            </h4>
            <br/>
            <p><small>By: {seller}</small></p>
            <p>Price: ${price}</p>
            <p>{star} 	&#11088; 	&#11088; 	&#11088;</p>
            <p><small>Only {stock} left in stock - Order soon . . .</small></p>
            <p>Quantity: {quantity}</p><br/>
            <button className='main-button'
            onClick={() => removeProduct(key)}>
                <i className="fas fa-eraser"></i> Remove Item</button>
            </div>
            </div>
        </>
    )
}

export default ReviewItems



