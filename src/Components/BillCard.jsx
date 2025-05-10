import React, { use, useState } from 'react';
import { FcMoneyTransfer } from 'react-icons/fc';
import { MdDateRange } from 'react-icons/md';
import { NavLink } from 'react-router';
import { AuthContext } from '../ContexApi/AuthProvider';
import { IoCheckbox } from 'react-icons/io5';

const BillCard = ({da}) => {
   // console.log(da)
   const {adata}=use(AuthContext)
  console.log(adata)
      const {id,bill_type,icon,organization,amount,duedate}=da
      const stat=adata?.find(ada=>ada==id)
    return (
        <div className='flex flex-col   r xl:flex-row justify-between items-center xl:gap-10 gap-3 p-2 bg-primary text-accent rounded-2xl px-4 '>
         <div className='w-[300px] md:w-[400px] xl:w-40 p-5 rounded-3xl mx-auto xl:mx-0 flex justify-center'>
            <img src={icon}></img>
         </div>
            
            <div className='space-y-2'>
                <p className='text-3xl font-bold '>{organization}</p>
                <p className='text-base badge badge-info text-white '>Bill type: {bill_type}</p>
                </div>
                <p className='flex items-center text-2xl font-semibold'><FcMoneyTransfer />Amount:{amount}</p>
                <p className='flex items-center   badge badge-outline badge-xl   badge-accent'><MdDateRange />Due-Date: {duedate.slice(0,10)}</p>
             {stat&&<IoCheckbox color='green' size={24} />}   
         { stat?<button className='btn btn-white text-primary text-2xl'>Pay</button>:<NavLink to={`/billsdetails/${id}`}><button className='btn btn-accent text-primary text-2xl '>Pay</button></NavLink>
         }
        </div>
    );
};

export default BillCard;