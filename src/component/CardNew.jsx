import React, { useState,useEffect } from 'react'
import "./CardNew.css"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'

function CardNew() {
  const [totalPrice, setTotalPrice] = useState(0)
  const [data, setData] = useState(0)
  
  const CartItem = useSelector((state)=> state.addedItem)
  let price = useSelector((state)=> state.getPrice)
  // const price = useSelector((state)=> state.getPrice)
  // const dispatch = useDispatch()
  let { id } = useParams()
  const navigate = useNavigate()

  const getUser = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log("CartItem",CartItem)
  console.log("data",data)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Product Information</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          
          </div>
        </div>
      </nav>
      <div className='container my-4'>

          {/* Now showing {id} */}
          <div className='box'>
            <img src={data.image} alt="error" height="200px" width="200px"/>


            <div className='mx-4'  >

              <div className="block"> <b>Category - </b> {data.category} </div>
              <div className="block"> <b>Description - </b> {data.description} </div>
              <div className="block"> <b>Title - </b> {data.title} </div>
              <div className="block"> <b>Price - </b> {data.price} </div>
              {/* <div className="block"> <b>Rating - </b> {data?.rating?.rate} | Count  - {data?.rating?.count}</div>      */}
            
            </div>
          </div>
          </div>
          {/* <h4>Cart Items</h4>
          
          <div className="container">
            { CartItem?.length && CartItem.map((item, ind)=> {
              return (
                <div style={{fontSize:"10px",  border: "1px solid grey", padding: "5px"}}> {item["title"]} | {item["price"]} </div>
              )
            }) }  
          </div>
          <h1>Total Price{price}</h1> */}
          {/* <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div> */}
            
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              My Name is Saurabh
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div> */}
      
    </>
  )
}

export default CardNew
