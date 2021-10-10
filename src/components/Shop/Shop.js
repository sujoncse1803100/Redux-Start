import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Actions/CartAction';
import Product from '../Product/Product';

const Shop = (props) => {
    const { products, addToCart } = props;

    return (
        <div className="text-center">
            <h2>This is shop</h2>
            {
                products.map(p => <Product key={p.id} product={p} addToCart={addToCart} />)
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);