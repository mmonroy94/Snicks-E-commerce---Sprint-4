import { GET_ALL_PRODUCTS, SET_FILTERED_PRODUCTS, SIGN_IN, SHOW_CART, ADD_ITEM_CART, DELETE_ITEM_CART, DECREASE_ITEM_QUANTITY, CLEAR_CART, CART_TOTAL, ROLE } from "./action-types";
import { cartTotal } from "./actions";

const initialState = {
    allProducts: [],
    allProductsCopy: [],
    filteredProducts: [],
    userLogged: '',
    showCart: '',
    shoppingCartItems: [],
    cartTotal: 0,
    role: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                allProducts: action.payload,
                allProductsCopy: action.payload   
            }

        case SET_FILTERED_PRODUCTS:
            return{
                ...state,
                filteredProducts: action.payload
            }
        
        case SIGN_IN:
            return{
                ...state,
                userLogged: action.payload
            }        
        
        case SHOW_CART:
            return{
                ...state,
                showCart: action.payload
            }
        
        case ADD_ITEM_CART:   
        const productIndex = state.shoppingCartItems.findIndex((item) => item.id === action.payload.id);

        if (productIndex !== -1) {
          // Si existe un prod. con el mismo id, actualiza la propiedad quantity
          const updatedCartItems = [...state.shoppingCartItems];
          updatedCartItems[productIndex].quantity = updatedCartItems[productIndex].quantity + 1;
        console.log('PRODUCTO ENCONTRADO CON SU INDEX', updatedCartItems[productIndex]);
          return {
            ...state,
            shoppingCartItems: updatedCartItems,
          };
        } else {
          // Si el producto no existe, lo agrega
          const newProduct = { ...action.payload, quantity: 1 };
          return {
            ...state,
            shoppingCartItems: [...state.shoppingCartItems, newProduct ],
          };
        }

        case DECREASE_ITEM_QUANTITY:
            const decProductIndex = state.shoppingCartItems.findIndex((item) => item.id === action.payload.id);
                const cartItemsCopy = [...state.shoppingCartItems];
                if(cartItemsCopy[decProductIndex].quantity > 1){
                    cartItemsCopy[decProductIndex].quantity = cartItemsCopy[decProductIndex].quantity - 1;
                    return {
                        ...state,
                        shoppingCartItems: cartItemsCopy,
                      };
                }
        
        case DELETE_ITEM_CART:
            const filteredProducts = [...state.shoppingCartItems].filter((product) => product.id !== action.payload.id)
            console.log('Productos filtrados',filteredProducts);
            return{
                ...state,
                shoppingCartItems: filteredProducts,
            }

        case CLEAR_CART:
            return{
                ...state, 
                shoppingCartItems: []
            }

        case CART_TOTAL:
            return{
                ...state,
                cartTotal: state.cartTotal + Number(action.payload)
            }

        case ROLE:
            return{
                ...state,
                role: action.payload
            }

        default:
            return { ...state };
    }
}


export default reducer