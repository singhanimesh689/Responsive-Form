import React from 'react';

import "./Home.css";
import logo from "../../assets/images/illustration-sign-up-desktop.svg";
import Signup from '../../components/SignUp/signup';

const Home = ({getData}) => {
  return (
    <div className='box'>
      <Signup getData = {getData}/>
      <div className='logo-part'>
      <img className='logo logo-mobile' src={logo} alt='logo'></img> 
      </div>
    </div>
  )
}

export default Home
