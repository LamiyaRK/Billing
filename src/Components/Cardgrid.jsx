import React from 'react';
import Card from './Card';

const Cardgrid = () => {
    const data = [
        {
          id: 1,
          name: "Titas Gas",
          logo: "/Titas.png", 
          category: "Gas",
          description: "Pay Titas Gas bills easily and securely.",
        },
        {
          id: 2,
          name: "Carnival Internet",
          logo: "/carnival.jpg",
          category: "Internet",
          description: "Pay Carnival broadband bills instantly.",
        },
        {
          id: 3,
          name: "Akash DTH",
          logo: "/akash.png",
          category: "DTH",
          description: "Recharge your Akash DTH connection online.",
        },
        {
          id: 4,
          name: "DESCO",
          logo: "/desco.png",
          category: "Electricity",
          description: "Pay your DESCO electricity bills effortlessly.",
        },
        {
          id: 5,
          name: "NESCO",
          logo: "/nesco.png",
          category: "Electricity",
          description: "Pay NESCO prepaid & postpaid bills anytime.",
        },
        {
          id: 6,
          name: "WASA",
          logo: "/wasa.png",
          category: "Water",
          description: "Pay your WASA water bills conveniently.",
        },
      ];
      
    return (
        <div className='w-11/12 mx-auto text-center space-y-4 '>
          <h1 className='text-4xl font-bold'>Supported Utility & Service Partners</h1>
          <p className='text-xl font-semibold'>Easily pay your utility, internet, gas, and TV bills through our trusted partner organizations — all in one place.</p>
        <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
      
            {
                data.map(da=><Card key={da.id} da={da}></Card>)
            }
        </div>
        </div>
    );
};

export default Cardgrid;