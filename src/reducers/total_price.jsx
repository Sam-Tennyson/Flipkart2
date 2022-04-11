const totalItem = (start = 0, action)=> {
    switch (action.type) {
        case "Total_Item":
            return start+1
        default:
            return start;
    }
}
export default totalItem