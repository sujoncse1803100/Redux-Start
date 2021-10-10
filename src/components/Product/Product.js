import React from 'react';

const Product = (props) => {
    const { product, addToCart } = props;
    return (
        <div className="text-center p-4" style={{ border: '1px solid black', marginTop: '10px' }}>
            <h5>{product.name}</h5>
            <button onClick={() => addToCart(product.id, product.name)}>add to cart</button>
        </div>
    );
};

export default Product;