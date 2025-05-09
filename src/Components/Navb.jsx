import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../ContexApi/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { getData } from './handleAmount';

const Navb = () => {
  const {user,logOut,money,setMoney}=use(AuthContext)
    
    const list=<div className='text-lg font-medium flex gap-5 '>
      <NavLink to='/'> <p>Home</p></NavLink>
      <NavLink to='/bills'> <p>Bills</p></NavLink>
      <NavLink to='/user'> <p>Profile</p></NavLink>
        
        
    </div>
  
    const amount = user ? getData(user.email) : 0;
    const handleLogout=()=>{
      logOut().then(()=>
        alert("Logout successful")
      ).catch(error=>
        console.log(error)
      )
    }
    return (
        <div className='w-11/12 mx-auto text-accent '>
         <div className="navbar bg-primary shadow-sm rounded-lg p-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {list}
      </ul>
    </div>
    <a className=" text-4xl text-white font-bold"><i>Bill</i><span className='text-accent'>encia</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {list}
    </ul>
  </div>
  <div className="navbar-end gap-3 flex">
  {
    user?<div className='flex items-center gap-3'>
    <div class="dropdown dropdown-end">
  <div tabindex="0" role="button"  > <div class="avatar  ">
  <div class="w-15 rounded-full border-2 ">
    <img src={user.photoURL} />
  </div>
  
</div></div>
  <ul tabindex="0" class="dropdown-content menu  rounded-box z-1 w-52 p-2 shadow-sm bg-primary">
    <li><a className='text-xl font-semibold text-center'>Total Amount:{amount}</a></li>
    <li><a className='flex  justify-center'><button className="btn bg-primary btn-outline border-accent text-white " onClick={handleLogout}>Log Out</button></a></li>
  </ul>
</div>
   
</div>:<div className='flex gap-3'>
  <Link to='/login' className="btn bg-primary btn-outline border-accent text-white">Login</Link>
  <Link to='/register' className="btn bg-primary btn-outline border-accent text-white">Register</Link>
</div>
  }
  <ToastContainer />
  </div>
 
</div>

        </div>
    );
};

export default Navb;