const DetailViewer = (state=[], action)=> {
    // const [value, setValue] = useState('')
    switch(action.type) {
        case "Detail_Viewer":
            let item = (action.payload);
            return { item};
        default:
            return state;
    }
}

export default DetailViewer