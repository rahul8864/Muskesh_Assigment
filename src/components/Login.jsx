import React, { useEffect, useState } from 'react';
import "../styles/login.css"
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Login = () => {
  const currencies = [
    {
      value: 'India',
      label: 'India',
    },
    {
      value: 'Nepal',
      label: 'Nepal',
    },
    {
      value: 'Russia',
      label: 'Russia',
    },
    {
      value: 'China',
      label: 'China',
    },
  ];
  

  const [currency, setCurrency] = React.useState('India');

  const [phone, setPhone] = useState("");
  const [phoneflag, setPhoneflag] = useState("");
  const [mail, setMail] = useState("");
  const [count, setCount] = useState(0);
  const [mailflag, setMailflag] = useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  useEffect(() => {
    for (let i = 0; i < phone.length; i++) {
      // console.log(phone.charCodeAt(i));
      if (phone.charCodeAt(i) >= 97 && phone.charCodeAt(i) <= 122 || phone.charCodeAt(i) >= 65 && phone.charCodeAt(i) <= 90)
        setPhoneflag("Alphabets not allowed");
      else setPhoneflag("");
    }
  }, [phone])

  useEffect(()=>{
    for (let i = 0; i < mail.length; i++) {
      if (mail[i] === ".") setCount((p) => p + 1);
    }
  },[mail])

  useEffect(()=>{
    if (count > 1) setMailflag("no full stop after email")
    else setMailflag("");
  },[count])

  return (

    <>
      <div className='parent_div'>
        <div className="child1_div">
          <img className='child1_1_img' src="./Group.png" alt="" />
        </div>
        <div className="child2_div">
          <h2 className='child2_1_div'>Hi, let’s get in touch.</h2>

          <TextField
            error
            id="outlined-error-helper-text"
            label="Phone no."
            helperText={phoneflag}
            onChange={(e) => { setPhone(e.target.value) }}
          /><br />

          <TextField
            id="outlined-select-currency"
            className='country'
            select
            label="Select Country"
            value={currency}
            onChange={handleChange}
          // helperText="Please select your currency"
          >{currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField><br />

          <TextField
            error
            id="outlined-error-helper-text"
            label="Email Address"
            helperText={mailflag}
            onChange={(e) => { setMail(e.target.value) }}
          /><br />

          <TextField
            error
            id="outlined-error-helper-text"
            label="Enter name"
//             helperText=""
          /><br />

          <textarea className='textarea_msg' placeholder='Message'></textarea><br />

          <img onClick="" className='submit_btn' src="./btn.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Login
