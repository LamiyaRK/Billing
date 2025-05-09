import React, { use, useState } from 'react';
import { AuthContext } from '../ContexApi/AuthProvider';
import { toast } from 'react-toastify';

const Updateinfo = () => {
    const [err,setErr]=useState('')
  
   
    const {setUser,updateUserInfo,user}=use(AuthContext)
    const handleRegister=e=>{
        e.preventDefault();
        const name=e.target.name.value;
     
        const photo=e.target.photo.value;
       
        updateUserInfo({ displayName:name, photoURL: photo})
        .then(()=>{
            setUser({...user,displayName:name,photURL:photo})
               toast.success("Update Successful!",{
                position: "top-center",
               
                theme:'colored'
               })
            })
        .catch(error=>{
            setErr(error)
            setUser(user)
    })
}
       
    return (
        <div>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-40">
          
          <div className="card-body">
            <form className="fieldset" onSubmit={handleRegister} >
            <label className="label">Name</label>
              <input type="text" className="input" placeholder="Enter your name" name='name' required/>
              <label className="label">Photo URL</label>
              <input type="url" className="input" placeholder="Enter your photo URL" name='photo' required />
              <button className="btn btn-neutral mt-4" value='submit' >Update</button>
              {   err&&<p className='btn btn-error '>{err.message}</p>}
          </form>
          </div>
        </div>    
        </div>
    );
};

export default Updateinfo;