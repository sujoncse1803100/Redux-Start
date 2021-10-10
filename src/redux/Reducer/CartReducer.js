import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartAction";


const initialSTate = {
    cart: [],
    products: [
        { name: "Lanovo Laptop", id: 1 },
        { name: "Asus Laptop", id: 2 },
        { name: "DELL Laptop", id: 3 },
        { name: "HP Laptop", id: 4 },
        { name: "DOEL Laptop", id: 5 }
    ]
}

export const cartReducer = (state = initialSTate, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return { ...state, cart: newCart };
        case REMOVE_FROM_CART:
            const cartId = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);
            return { ...state, cart: remainingCart }
        default: return state;
    }
}