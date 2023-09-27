

// import './login.css';
import {useState} from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
const  LoginPage= () => 
{
    const history = useHistory();
    const pattern=new RegExp('^\s*$');
    const [Username,setUsername]=useState('');
    const [Password,setPassword]=useState('');
    const [con,setCon]=useState(false);
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(validate())
      {
         fetch(`http://localhost:5147/api/login/get/${Username}`)
         .then(response=> response.json()).then(json=>
          {
              if(json.length!=0)
              {
                  if(json[0].username==Username)
                  {
                    if(json[0].password===Password)
                    {
                     
                      setCon(true);
                      history.push('./Observation')

                    }
                    else
                    {
                      toast('Password  is incorrect', {
                        position: "top-center",
                        autoClose: 50,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    }
                  }
                  else
                  {
                    toast('Username is incorrect', {
                      position: "top-center",
                      autoClose: 50,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      });
                  }
              }
              else
              {
                toast('Username is incorrect', {
                  position: "top-center",
                  autoClose: 50,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });
              }
          });
      }
      }

    const validate=()=>{
      let result=true;
      if(Username===''||Username===null|| Username.match(pattern)===false)
      {
        toast('Username is incorrect', {
          position: "top-center",
          autoClose: 50,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        result=false;
      }
      if(Password===''||Password===null)
      {
        result=false;
      }
      return result;

    }
    
    return (
    <div className="adjustment">    
        <div className="login-container">

            <h2>Login</h2>
            <form  onSubmit={handleSubmit}>
            <input
                type="text"
                className="login-input"
                placeholder="Username"
                value={Username}
                onChange={(e)=>{setUsername(e.target.value)}}
                required
            />
            <input
                type="password"
                className="login-input"
                placeholder="Password"
                value={Password}
                onChange={(e)=>{setPassword(e.target.value)}}
                required
            />
            <button type="submit" className="login-button">Login</button>
            </form>
            <ToastContainer/>
        </div>
    </div>

     );
}

export default LoginPage;