import React from 'react';

const Service = () => {
    return (
        <div className='w-11/12 mx-auto text-center my-40 space-y-10'>
        <div className='space-y-3'>
            <h1 className='text-4xl font-bold '>Our Services at Your Fingertips</h1>
            <p className='text-xl font-semibold max-w-3xl mx-auto'>Easily pay your electricity, gas, water, internet, and other utility bills from one secure platform — anytime, anywhere. Fast, reliable, and built for your convenience.</p>
        </div>
        <div className='grid grid-cols-6 '>
            <div className='flex flex-col items-center justify-center'>
            <img src='/sendMoney.jpg'></img>
            <button className='btn btn-outline btn-info'>Send Money</button>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <img src='/Cashout.jpg'></img>
            <button className='btn btn-outline btn-info'>Cash Out</button>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <img src='/education.jpg'></img>
            <button className='btn btn-outline btn-info'>Education Fee</button>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <img src='/MobileRecharge.jpg'></img>
            <button className='btn btn-outline btn-info'>Mobile Recharge</button>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <img src='/payment.jpg'></img>
            <button className='btn btn-outline btn-info'>Payment</button>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <img src='/savings.jpg'></img>
            <button className='btn btn-outline btn-info'>Savings</button>
            </div>
        </div>
        </div>
    );
};

export default Service;