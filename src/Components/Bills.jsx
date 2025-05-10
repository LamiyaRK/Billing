import React,{ useState,useEffect } from 'react';
import { useLoaderData } from 'react-router';
import BillCard from './BillCard';

const Bills = () => {
    const data=useLoaderData()
    const [data1,setData1]=useState([])
    useEffect(() => {
      setData1(data)
    }, [])
   
   
    const handleSort=(e)=>{
        setData1(data.filter(da=>da.bill_type==e.target.value)) 

    }
    return (
        <div className='w-11/12 mx-auto text-center mt-20' >
        <h1 className='text-4xl font-bold mb-4'>Pay Your Bill</h1>
        
        <p className='text-xl font-semibold'>Please review the bill details below and click "Pay" to complete the payment.</p>
        <select class="select select-accent" onChange={handleSort}>
  <option selected disabled>Sort by</option>
  <option>electricity</option>
  <option>gas</option>
  <option>internet</option>
   <option>credit card bill</option>
    <option>water</option>
     <option>tuition</option>
</select>
        <div className=' grid grid-cols-1 gap-3 my-30'>
            {
                data1.map(da=><BillCard key={da.id} da={da}></BillCard>)
            }
        </div>
        </div>
    );
};

export default Bills;