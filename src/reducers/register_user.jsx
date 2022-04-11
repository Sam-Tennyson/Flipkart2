// let islogged = false
let initial = {
    data: []
}
const register_user = (state={...initial}, action)=> {

    switch(action.type) {
        case "Register_User":
            // let newMember = state?.data?.push(action.payload);
            return {...state, data: [...state?.data, action.payload]}
        // case "REMOVE_ITEM"
        default:
            return state;
    }
}

export default register_user