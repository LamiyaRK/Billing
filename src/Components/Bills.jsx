import React from 'react';
import { useLoaderData } from 'react-router';
import BillCard from './BillCard';

const Bills = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div className='w-11/12 mx-auto text-center mt-20' >
        <h1 className='text-4xl font-bold mb-4'>Pay Your Bill</h1>
        <p className='text-xl font-semibold'>Please review the bill details below and click "Pay" to complete the payment.</p>
        <div className=' grid grid-cols-1 gap-3 my-30'>
            {
                data.map(da=><BillCard key={da.id} da={da}></BillCard>)
            }
        </div>
        </div>
    );
};

export default Bills;