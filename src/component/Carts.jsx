import { useSelect } from "@mui/base";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPrice, RemoveItem, AddMultiplier } from "../actions";
import "./Carts.css"
// const ShowCard = (props) => {
//   console.log("Here", props.userData);
//   return (
//     <>
//       {props.userData.map((user) => {
//         return (
//           //   <div className=" col-lg-3 col-md-4 col-sm-6 " style={{width:"18rem"}}>
//           <div className=" col-lg-3 col-md-4 col-sm-6  my-3">
//             <div className="card">
//               <div className="card-body">
//                 <div className="card-title">
//                   <h3>{user.title}</h3>
//                 </div>
//                 <div className="card-text">{user.body}</div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };
import { Link, useParams } from "react-router-dom";
export default function Cards(props) {
  const dispatch =  useDispatch()
  const [totalPrice, setTotalPrice] = useState("") 
  const [noItem, setNoItem] = useState(0) 
  const cartItem = useSelector((state)=> state.addedItem)
  const logged_user = useSelector((state) => state.Logged_user); 
  // const [removeId, setRemoveId] = useState(0)
  let price = useSelector((state)=> state.getPrice)
  // let no_of_item = logged_user[0].Cart_Item.length;
  const calculateprice = (id) => {
    let sum = 0;
    for (let i = 0; i < cartItem.length; i++) {
        // console.log("llll",cartItem[i].User_id, id.id)
      if ( cartItem[i].User_id == id.id ) {
        console.log("jkjkkk")
        sum += cartItem[i].price;
      }
    }
    return sum;
  };
  const calculateTotalItems = (id) => {
    let len = 0;
    for (let i = 0; i < cartItem.length; i++) {
        // console.log("llll",cartItem[i].User_id, id.id)
      if ( cartItem[i].User_id == id.id ) {
        console.log("jkjkkk")
        len += 1;
      }
    }

    return len;
  };
  let ProductList = logged_user[0].Cart_Item;
  let prices = logged_user[0].Cart_Item.price;
  // let {id} = useParams()
  let no_of_item=0;
  let s = 0;
  let count = 0;
  const { id } = useParams();

  const addMore= (p_id, u_id)=> {
    console.log(p_id, u_id)
  }

  const remove= (p_id, u_id)=> {
    // setRemoveId(p_id)
    console.log(ProductList, p_id, u_id)
  }

  useEffect(()=> {
    cartItem.reverse()
  },[])
  // console.log("New",  ProductList)
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to={`/Home/${id}`}>WishList</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
           
          </div>
        </div>
      </nav>

      <div className="my-3" style={{textAlign:"center"}}>
          <span style={{color:"grey"}} >Total Number of Items - {calculateTotalItems({id})} | Total Price -  {calculateprice({id})}  </span>
      </div>

      <div className="container">
      {/* {cartItem.reverse()} */}
       <div className="container col-8" >
      
          {
            cartItem.map((item)=> {
              {s = s+  item.price}
              {count += 1}
              //  console.log("asdf",item.User_id,removeId, id)
              return (
                
                <>
                {/* {setTotalPrice(s)} */}
                  { (item.User_id === id  ) ?
                  <div className="boxCart my-4">
                    <img className="mx-4" src={item.image} alt="error" height="100px" width="100px"/>
                    <div style={{width: "100%"}}>

                    <div className="block">
                      <b>About Product - </b>
                      {item.title}  
                      {/* {no_of_item = no_of_item+1}
                      {price = price+ item.price} */}
                    </div>
                    <div className="block">
                      <b>Price - </b>
                      {item.price}  
                      <b style={{marginLeft:"5px"}} >Quantity - </b>
                      {item.Quantity}
                    </div>
                    
                    <div className="block">
                      <button className="btn btn-success mx-5" onClick={()=> {
                        // console.log("Add More")
                        dispatch(AddMultiplier([item.Product_Id, item.User_id]))
                      }} >Add More</button>  
                      <button className="btn btn-danger mx-5 " onClick={()=> {
                        console.log("Remove")
                        // remove(item.Product_Id, item.User_id)
                        dispatch(RemoveItem([item.Product_Id, item.User_id]))
                      }}>Remove</button>  
                    </div>

                    </div>
                  </div>
                   : "" } 
                </>
              )
                
            }
            
            )
          } 
        </div>
      </div>
    </>
  );
}