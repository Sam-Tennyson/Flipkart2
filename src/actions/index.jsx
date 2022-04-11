export const increment = (num)=> {
    return {
        type: 'INCREMENT',
        payload: num
    }
}
export const decrement = ()=> {
    return {
        type: 'DECREMENT'
        // payload: num
    }
}
export const addToCart = (newItem)=> {
    console.log("actionnnnnn");
    return {
        type: 'ADD_TO_CART',
        payload: newItem
    }
}

export const DetailViewer = (detail)=> {
    return {
        type: 'Detail_Viewer',
        payload: detail
    }
}

export const GetPrice = (price)=> {
    return {
        type: 'Get_Price',
        payload: price
    }
}

export const TotalItem = ()=> {
    return {
        type: 'Total_Item'
        // payload: item
    }
}

export const RegisterUser = (newMember)=> {
    return {
        type: "Register_User",
        payload: newMember
    }
}

export const LoggedUser = (newMember)=> {
    console.log("check1")
    return {
        type: "LoggedUser",
        payload: newMember
    }
}

export const RemoveItem = (ids)=> {
    console.log("check111111", ids)
    return {
        type: "RemoveItem",
        payload: ids
    }
}
export const AddMultiplier = (ids)=> {
    console.log("check222222", ids)
    return {
        type: "AddMultiplier",
        payload: ids
    }
}





