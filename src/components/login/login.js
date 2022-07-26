import React, {useState} from "react"
import "./login.css"
import Axios from "axios"
import { useHistory,Link } from "react-router-dom"

const Login = () => {

     const history = useHistory()

    // const [ user, setUser] = useState({
    //     email:"",
    //     password:""
    // })

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }

    // const login = () => {
    //     axios.post("http://localhost:9002/login", user)
    //     .then(res => {

    //         //setLoginUser(res.data.user)
    //         if(res.data.message === "login successfull")
           
    //         {history.push("/")}
    //         else
    //         {
    //             alert("Incorrect Username/Password");
    //         }
    //     })
    // }

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
   

    Axios({
        method: "POST",
        data: {
          username: loginUsername,
          password: loginPassword,
        },
        withCredentials: true,
        url: "http://localhost:4000/login",
      }).then((res) =>{
        console.log(res);
          history.go("/");                                  
       
         
        
       
    });
    }


    return (
        <div className="login">
            <h1 style={{color:'black'}}>Login</h1>
            <input type="text" name="email" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} placeholder="Enter your Username"></input>
            <input type="password" name="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>LOG IN</div>
            <div>or</div>
           <Link to="/register">
           <p> Create Account</p>
           </Link> 
        </div>
    )
}

export default Login