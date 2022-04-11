import React, { useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import "./DetailCard.css"
function DetailCard() {

    const [isPresent, setIsPresent] = useState("")
    const CardDetails = useSelector((state)=> state.detailViewer)
    // console.log(CardDetails)
    useEffect(()=> {

    })
  return (
    <>
        {/* <h1>asdf</h1> */}
     {CardDetails ? <div className="makeWhite" >
         
        <div className='block'>
            <span className='highlight'> <b> Title - </b></span> 
            {CardDetails.item.title}
        </div>
        <div className='block'>
        <span className='highlight'> <b> Price - </b></span> 
            
            {CardDetails.item.price}
            </div>
        <div className='block'>
        <span className='highlight'><b>Category - </b></span> 
            
            {CardDetails.item.category}
            </div>
        <div className='block'>
        <span className='highlight'><b>Rating - </b></span> 
            
            {/* {CardDetails?.item?.rating["rate"] } and { CardDetails?.item?.rating["count"]} */}
        </div>
    
    </div>:"" }
    </>
  )
}

export default DetailCard
