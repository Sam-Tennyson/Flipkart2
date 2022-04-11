import React from 'react'
import "./Login_tippy.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import BungalowIcon from '@mui/icons-material/Bungalow';
import ViewListIcon from '@mui/icons-material/ViewList';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
// import Signup from './Signup';
import { useNavigate } from 'react-router-dom';

function Login_tippy() {
  const navigate = useNavigate();
  return (
    <>
      <div className="whitebox">
        <div className="first">
            <span>New customer?</span>    
            <button className='btn btn-primary btn-sm mx-3' onClick={()=>navigate("/signup")}>Sign Up</button>    
        </div>
        <hr />
        <div className="first">
            <AccountCircleIcon />
            My Profile</div>
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

export default Login_tippy
