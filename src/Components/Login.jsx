import React, { use, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../ContexApi/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const [err,setErr]=useState('')
    const loc=useLocation();
    const navigate=useNavigate()
    const p=loc.state?loc.state:'/'
    const {signIn,setUser,gRegister,forPass}=use(AuthContext)
    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const pass=e.target.password.value;
        signIn(email,pass).
        then(res=>{setUser(res.user)
            navigate(loc.state?loc.state:'/')
            setErr("")
        }).
        catch(error=>setErr(error));
         
    }
     const hRegister=()=>{

        gRegister().then(res=>{
            setUser(res.user)
            navigate(loc.state?loc.state:'/')
        })
        .catch(error=>setErr(error))
        
    }
  const handleForgetPass = () => {
  const email = document.querySelector("input[name='email']").value;
  if (!email) {
    toast("Please enter your email first");
    return;
  }

  forPass(email)
    .then(() => {
      toast("Password reset email sent!");
    })
    .catch((error) => {
      toast(`Error: ${error.message}`);
    });
};

    return (
        <div >
        
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-40">
          
      <div className="card-body">
      <h1 className='text-center text-2xl'>Login</h1>
        <form className="fieldset" onSubmit={handleLogin}>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email'/>
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password' />
          <div><button className='btn' onClick={handleForgetPass}>Forgot password?</button></div>
          <button className="btn btn-neutral mt-4" value='submit'>Login</button>
           <button className="btn btn-neutral mt-4" onClick={hRegister}><FaGoogle />Login with Google</button>
        {   err&&<p className='btn btn-error '>{err.message}</p>}
          <p >Don't have any accout?<Link to='/register' state={p}  className='text-info font-semibold  border-b-2'>Register</Link></p>
        </form>
      </div>
    </div>  
        </div>
    );
};

export default Login;