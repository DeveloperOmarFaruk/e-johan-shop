import React from 'react'
import {useParams} from 'react-router-dom'
import fakeData from '../../fakeData/index'
import Product from './Product'
import './Product.css'

const ProductDetails = () => {
    const {key} = useParams()
    const product = fakeData.find(pd => pd.key === key)

    return (
        <>
            <h1 style={{textAlign: 'center', color:'tomato'}}>{key} Product Details</h1>
            <div className="productDetails-container">
            <Product showAddToCart={false} showAddToDetails={true} product={product}/>
            </div>
        </>
    )
}

export default ProductDetails




