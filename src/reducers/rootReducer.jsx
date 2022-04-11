import counterReducer from "./counter";
import loggedReducer from "./islogged";
import add_To_Cart from "./addToCart";
import DetailViewer from "./detail_Viewer";
import getPrice from "./getPrice";
import totalItem from "./total_price";
import register_user from "./register_user";
import logged_user from "./loggeduser";
import removeItem from "./removeItem";

import {combineReducers} from 'redux'

const RootReducers = combineReducers({
    myCount: counterReducer,
    isLogged: loggedReducer,
    addedItem: add_To_Cart,
    detailViewer: DetailViewer,
    getPrice: getPrice,
    no_of_item: totalItem,
    Registered_Member: register_user,
    Logged_user: logged_user,
    RemoveItem: removeItem,
})

export default RootReducers