import React from 'react';
import Navb from './Navb';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
           <Navb></Navb>
           <div className='flex flex-col items-center space-y-4 mt-10'>
          <p className='text-6xl'>404 Error</p>
       <Link to='/'> <button className='btn btn-primary'>Go to home</button></Link>  
          </div>
        </div>
    );
};

export default Error;