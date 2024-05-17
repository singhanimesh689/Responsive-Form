import React from 'react';
import "./subscribed.css";
import logo from "../../assets/images/icon-success.svg";
import { useNavigate } from 'react-router-dom';

const Subscribed = ({email}) => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/");
    }
  return (
    <div className='subscribed-box'>
        <img className='logo-subscribing' src={logo} alt='logo'></img>
        <h2 className='thanks-heading'>Thanks for subscribing!</h2>
        <p className='paragraph'>A confirmation email has been sent to <span className='bold'>{email}</span>. Please open it and click the button inside to confirm your subscription. </p>
        
        <button className='Dismiss' onClick={handleClick} type='submit'>Dismiss message</button>
    </div>
  )
}

export default Subscribed
