import React from 'react'
import "./Login_tippy.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import BungalowIcon from '@mui/icons-material/Bungalow';
import ViewListIcon from '@mui/icons-material/ViewList';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
// import Signup from './Signup';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { color } from '@mui/system';

function Login_tippy_curr() {
  const navigate = useNavigate();
  const { id } = useParams();
//   let [username, setUserName] = useState("") ;
let username
   const reg_user  = useSelector((state)=>state.Registered_Member)
    console.log("id",id,"user", reg_user)
    reg_user.data.map((user)=> {
        if (user.Id == id) {
            console.log("jkjkj")
            // setUserName(user.Firstname)
            username = user.Firstname
            return 1
        }
        // console.log(user.Id, id)
    })
    // console.log("ljk",username)
  return (
    <>
      <div className="whitebox">
        
        <div className="first">
            <AccountCircleIcon />
            {username}</div>
        <div className="first">
            <StarPurple500Icon />
            Flipkart Plus Zone</div>
        <div className="first">
            <BungalowIcon />
            Orders</div>
        <div className="first">
            <ViewListIcon />
            Wishlist</div>
        <div className="first">
            <StarsIcon />
            Rewards</div>
        <div className="first">
            <CardGiftcardIcon />
            Gift Cards</div>
      </div>
    </>
  );
}

export default Login_tippy_curr
