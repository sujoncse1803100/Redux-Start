import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/Actions/CartAction';

const Cart = (props) => {
    const { cart, removeFromCart } = props;

    return (
        <div className="text-center">
            <h4>This is a cart</h4>
            <ul>
                {
                    cart.map(pd => {
                        return (
                            <li
                                key={pd.cartId}
                            >
                                {pd.name}
                                <button
                                    onClick={() => removeFromCart(pd.cartId)}
                                    className=" ms-3"
                                    style={{ border: 'none', background: 'none' }}
                                >
                                    X
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);