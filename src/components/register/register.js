import React, { useState } from "react"
import "./register.css"
import Axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    // const [ user, setUser] = useState({
    //     name: "",
    //     email:"",
    //     password:"",
    //     reEnterPassword: ""
    // })

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }

    // const register = () => {
    //     const { name, email, password, reEnterPassword } = user
    //     if( name && email && password && (password === reEnterPassword)){
    //         axios.post("http://localhost:9002/register", user)
    //         .then( res => {
    //             history.push("/login")
    //         })
    //     } else {
    //         alert("invlid input fields")
    //     }
    // }

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [email, setEmail] = useState("");
  const [reEnterPassword,setReEnterPassword]= useState("");

    const register = () => {
        if(registerUsername && email && registerPassword && (registerPassword===reEnterPassword))
        {
            Axios({
                method: "POST",
                data: {
                  username: registerUsername,
                  password: registerPassword,
                  email: email,
                },
                withCredentials: true,
                url: "http://localhost:4000/register",
              }).then((res) => {
                console.log(res);
                history.push("/login");
            });
        }else{
            alert("Please enter the input fields correctly.");
        }
       
    }


    return (
        <div className="register">
            <h1 style={{color:'black'}}>Create Account</h1>
            <input type="text" name="name" value={registerUsername} placeholder="Your userame" onChange={(e) => setRegisterUsername(e.target.value)}></input>
            <input type="text" name="email" value={email} placeholder="Your Email" onChange={(e)=> setEmail((e.target.value))}></input>
            <input type="password" name="password" value={registerPassword} placeholder="Your Password" onChange={(e) => setRegisterPassword(e.target.value)}></input>
            <input type="password" name="reEnterPassword" value={reEnterPassword} placeholder="Re-enter Password" onChange={(e) => setReEnterPassword(e.target.value)}></input>
            <div className="button" onClick={register} >Create</div>
            {/* <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div> */}
        </div>
    )
}

export default Register