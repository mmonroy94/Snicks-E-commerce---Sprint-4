import { GET_ALL_PRODUCTS, SIGN_IN, SHOW_CART, ADD_ITEM_CART, DELETE_ITEM_CART, DECREASE_ITEM_QUANTITY, CLEAR_CART, CART_TOTAL, ROLE } from "./action-types";
import axios from 'axios';

export const getAllProducts = () => {
    return async (dispatch) => {
        try{
                const { data } = await axios.get('json/db.json')
                console.log('ESTOS SON LOS PRODUCTOS', data);
                dispatch({ type: GET_ALL_PRODUCTS, payload: data})
            }
        catch(error){
            alert(error.response.data) 
        }
    }
}

export const signIn = (data) => {
    return async (dispatch) => {
        try{
            dispatch({ type: SIGN_IN, payload: data})
            }
        catch(error){
            alert(error.response.data) 
        }
    }
}

export const showCart = (data) => {
    return async (dispatch) => {
        try{
            dispatch({ type: SHOW_CART, payload: data})
            }
        catch(error){
            alert(error.response.data) 
        }
    }
}

export const addItemCart = (product) => {
    return async (dispatch) => {
        try{
            dispatch({ type: ADD_ITEM_CART, payload: product})
            console.log('PRODUCTO RECIBIDO EN EL CARRITO', product);
            }
        catch(error){
            alert(error.response.data) 
        }
    }
}

export const deleteItemCart = (data) => {
    return async (dispatch) => {
        try{
            dispatch({ type: DELETE_ITEM_CART, payload: data})
            }
        catch(error){
            alert(error.response.data) 
        }
    }
}

export const decreaseQuantity = (data) => {
    return async (dispatch) => {
        try{
            dispatch({ type: DECREASE_ITEM_QUANTITY, payload: data})
            }
        catch(error){
            alert(error.response.data) 
        }
    }
}

export const clearCart = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: CLEAR_CART})
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export const cartTotal = (value) => {
    return async (dispatch) => {
        try {
            dispatch({type: CART_TOTAL, payload: value})
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export const role = (value) => {
    return async (dispatch) => {
        try {
            if(value === 'user' || value === 'admin'){
                dispatch({type: ROLE, payload: value})
            }
           
        } catch (error) {
            alert(error.response.data)
        }
    }
}