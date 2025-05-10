import React, { use } from 'react';
import { AuthContext } from '../ContexApi/AuthProvider';
import { IoMdMail } from 'react-icons/io';
import { Link } from 'react-router';

const UserInfo = () => {
    const {user}=use(AuthContext)
   
    return (
        <div className='w-11/12 mx-auto my-30'>
            <div class="card   shadow-sm bg-primary text-accent">
  <figure class="px-10 pt-10">
    <img
      src={user.photoURL}
      alt="Shoes"
      class="rounded-xl w-50" />
  </figure>
  <div class="card-body items-center text-center ">
    <h2 class="card-title text-3xl ">{user.displayName}</h2>
    <p className='text-xl font-medium flex items-center gap-3'><IoMdMail size={24} />{user.email}</p>
    <div class="card-actions">
   <Link to='/updateInfo'><button class="btn btn-accent text-primary">Update Profile</button></Link>   
    </div>
  </div>
</div>
        </div>
    );
};

export default UserInfo;