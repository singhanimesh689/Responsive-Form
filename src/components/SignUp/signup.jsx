import React,{useState} from 'react';
import "./signup.css";
import {useNavigate} from "react-router-dom"

const Signup = ({getData}) => {
    const [email,setEmail] = useState('');
    const [isValid,setIsValid] = useState(true);
    const navigate = useNavigate();
    
    const handleChange=(event)=>{
        setEmail(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(!validateEmail(email)){
            setIsValid(false);
        }else{
            getData(email);
            setIsValid(true);
            navigate("/submit");
        }
    };

    const validateEmail = (email)=>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


  return (
    <div className='signup-part'>
        <div className='heading'>
            <h1>Stay Updated!</h1>
            </div>
            <div className='details'>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className='custom-list'>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li> 
                <li>and much more!</li>
            </ul>
                <form onSubmit={handleSubmit} className='form-details' id='emailForm' action='/submit' >
                    <h4>Email Address {!isValid && <span className='error' style={{ color: 'red'}}>Valid email required.</span>}</h4>
                
                    <input style={{ borderColor: isValid ? 'inherit' : 'red' }} id='targetChange' onChange={handleChange} className='text-box' type='email'placeholder='Email'></input>
                    <button className="Button" type='submit'>Subscribe to monthly newsletter</button>
                </form>
            </div>
    </div>
  )
}

export default Signup
