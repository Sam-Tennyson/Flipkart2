
const add_To_Cart = (state=[], action)=> {
    console.log(action)
    // const [value, setValue] = useState('')
    switch(action.type) {
        case "ADD_TO_CART":
            console.log(action,"Action");
            let item = action.payload;
            return  [...state,item];

        case "RemoveItem":
            // let data = state.items;
            let p_id = action.payload[0]
            let u_id = action.payload[1]
            console.log("items data",action.payload, p_id, u_id)

            let res = state.filter((item) => {
                console.log(item.Product_Id , p_id , item.User_id , u_id)
                if ( item.Product_Id === p_id && item.User_id === u_id) {
                    return ;
                } else {
                    return item
                }
                })
            console.log("Result - ",res)
            return res ;

        case "AddMultiplier":
            let p_id2 = action.payload[0]
            let u_id2 = action.payload[1]
            console.log("New Add data",action.payload, p_id2, u_id2)

            let res2 = state.filter((item) => {
                console.log(item.Product_Id , p_id2 , item.User_id , u_id2)
                if ( item.Product_Id === p_id2 && item.User_id === u_id2) {
                    console.log("mil gaya")
                    item.Quantity = item.Quantity + 1
                    console.log("mil gaya", item.Quantity)
                    item.price = item.price*item.Quantity
                    return item;
                } else {
                    return item
                }
                })
            console.log("Result ---->>>----- ",res2)
            return res2;
        default:
            return state;
    }
}

export default add_To_Cart