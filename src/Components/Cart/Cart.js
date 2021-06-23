import React from 'react'
import './Cart.css'
import '../Product/Product.css'



const Cart = (props) => {
    // const {shipping} = props.product
    const cart = props.cart

    // const total = cart.reduce((total, product) => total + product.price , 0)

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }



    let parcel = 0
    if (total > 250) {
        parcel = 0;
    }

    else if (total > 155) {
        parcel = 15;
    }

    else if (total > 0) {
        parcel = 20.00;
    }


    const vat = total / 50

    const finalTotal = total + parcel + Number(vat)

    const formatNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }


    return (
        <div className='order-summary'>
            <h1 className='title-order'>Order Summary</h1>
            <p>Items Order : {cart.length}</p>
            <p>Product Price: ${formatNumber(total)}</p>
            <p>Parcel Cost: ${parcel}</p>
            <p>Vat : ${formatNumber(vat)}</p>
            <p style={{ color: 'tomato' }}>Total Price: ${formatNumber(finalTotal)}</p><br />
            {
                props.children
            }

        </div>
    )
}

export default Cart








