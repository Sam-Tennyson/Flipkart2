const logged_user = (state = [], action)=> {
    console.log("check2")
    switch(action.type) {
        case "LoggedUser" :
            console.log("check3")
            let t = action.payload;
            return [t];
        default:
            return state; 
    }
}

export default logged_user