import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Redirect, useHistory } from 'react-router-dom';

export const Account = () => {
    const history = useHistory()
    // const U_NAME = localStorage.getItem("name")
    const U_NAME = 'Mohit Mayank'

    const logout = ()=>{
        
        // api call
        // if (res.status == 200){
            console.log("cliecked logout")
          
            history.push('/')
        // }
       
    }


  return (
    <div>
        <div className="account">
            <h1 style={{color:'black',padding:'20px'}}>Account</h1>
            <div  style={{display:"flex",justifyContent:'center',margin:'10px'}}>
            <Avatar sx={{ bgcolor:'tomato',alignItems:'center',width:'100px',height:'100px',padding:'10px' , fontSize:'60px' }}>{ U_NAME.charAt(0).toUpperCase()}</Avatar>
            </div>
            <div style={{margin:'20px',fontSize:'20px',color:'tomato'}}>{U_NAME.toUpperCase()}</div>
            <div className="log_btn" onClick={logout} >LOG OUT</div>
          
        
        </div>
    </div>
  )
}
