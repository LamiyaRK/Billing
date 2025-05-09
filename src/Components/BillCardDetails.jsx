import React, { use, useState } from 'react';
import { FcMoneyTransfer } from 'react-icons/fc';
import { MdDateRange } from 'react-icons/md';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../ContexApi/AuthProvider';
import { toast } from 'react-toastify';
import { getData, setData } from './handleAmount';

const BillCardDetails = () => {
    const [enable,setEnable]=useState(false)
  const data=useLoaderData();
  const navigate=useNavigate()
  const {id}=useParams();
 const mdata=data.filter(da=>da.id==id);
 const {money,setMoney,user,adata,setAdata}=use(AuthContext)
 const {bill_type,icon,organization,amount,duedate,img1}=mdata[0]
 const handleAmount=()=>{
    console.log(user.email)
  const res=setData(user.email,amount)
 console.log(res)
  if(res)
{ 
    setMoney(getData(user.email))
    
    console.log(adata)
    toast("Payment Successful",{
        theme:'colored',
        type:'success'
    })
    setAdata([...adata,id]);
  }
  else{
    toast("Not enough balance!",{
        theme:'colored',
        type:'error'
    })
  }
  navigate('/bills');
 }
 
    return (
        <div className='flex bg-primary text-accent p-4 gap-10 justify-center items-center my-10  mx-auto max-w-xl '>
           <div className='relative w-50'>
          <img src={icon} className='w-60 border-2 relative'/> 
          <img src={img1} className='w-15  absolute bottom-0 right-0 '/>
           </div> 
           <div className='space-y-3'>
          
                <p className='text-3xl font-bold '>{organization}</p>
                <p className='text-base badge badge-info text-white '>Bill type: {bill_type}</p>
                
                <p className='flex items-center text-2xl font-semibold'><FcMoneyTransfer />Amount:{amount}</p>
                <p className='flex items-center badge badge-outline  badge-accent'><MdDateRange />Due-Date: {duedate.slice(0,10)}</p>
                <select defaultValue="Color scheme" className="select select-accent bg-primary"  onChange={()=>setEnable(true)}>
  <option disabled={enable}>Payment Method</option>
  <option >Bkash</option>
  <option >Nagad</option>
  <option>Paypal</option>
</select>
    {enable&& <button className='btn btn-accent text-primary text-2xl btn-wide' onClick={handleAmount}>Pay Bill</button>}
           </div>
        </div>
    );
};

export default BillCardDetails;