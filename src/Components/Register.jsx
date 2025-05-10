import React, { use, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../ContexApi/AuthProvider';

const Register = () => {
    const [err,setErr]=useState('')
    const loc=useLocation();
    const navigate=useNavigate()
    const {cRegister,setUser,updateUserInfo,gRegister}=use(AuthContext)
    const handleRegister=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const pass=e.target.password.value;
        const email=e.target.email.value;
        const photo=e.target.photo.value;
       cRegister(email,pass).then(res=>{
        updateUserInfo({ displayName:name, photoURL: photo})
        .then(()=>{
            setUser({...res.user,displayName:name,photURL:photo}).catch(error=>{
                setErr(error)
                setUser(res.user)
            })
        })
       
        navigate(loc.state?loc.state:'/')
        setErr("")
       })
       .catch(error=>setErr(error))
    }
    const hRegister=()=>{

        gRegister().then(res=>{
            setUser(res.user)
        })
        .catch(error=>setErr(error))
        navigate(loc.state?loc.state:'/')
    }
    
    return (
        <div>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-40">
          
          <div className="card-body">
          <h1 className='text-center text-2xl'>Register</h1>
            <form className="fieldset" onSubmit={handleRegister} >
            <label className="label">Name</label>
              <input type="text" className="input" placeholder="Enter your name" name='name' required/>
              <label className="label">Photo URL</label>
              <input type="url" className="input" placeholder="Enter your photo URL" name='photo' required />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" name='email' required/>
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" name='password' 
              pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}" required />
              
              <button className="btn btn-neutral mt-4" value='submit'>Register</button>
              <button className="btn btn-neutral mt-4" onClick={hRegister}><FaGoogle /> Register with Google</button>
              {   err&&<p className='btn btn-error'>{err.message}</p>}
              <p >Already have an account?<Link to='/login'  className='text-info font-semibold  border-b-2'>Login</Link></p>
            </form>
          </div>
        </div>   
        </div>
    );
};

export default Register;