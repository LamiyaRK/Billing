import React from 'react';
import UserReview from './UserReview';

const Review = () => {
    const data = [
        {
          id: 1,
          name: "Rahim Uddin",
          location: "Dhaka",
          feedback: "Paying my utility bills has never been this easy! The platform is fast, secure, and super convenient.",
          rating: 5,
          image: "/beda.jpg"
        },
        {
          id: 2,
          name: "Farzana Akter",
          location: "Chittagong",
          feedback: "I love how I can pay all my bills from one place. The cashback offer on first payment was a bonus!",
          rating: 4,
          image: "/woman.jpg"
        },
        {
          id: 3,
          name: "Tanvir Hasan",
          location: "Sylhet",
          feedback: "Super smooth experience. Even my parents find it easy to use!",
          rating: 5,
          image: "/man.jpg"
        },
        
      ];
      
    return (
        <div className='w-11/12 mx-auto mt-[100px] text-center'>
            <h1 className='text-4xl font-bold mb-5'>Customer Reviews</h1>
            <p className='text-xl font-semibold'>See what your customers are saying about their billing experience. Gather insights, build trust, and improve your service with real-time feedback and ratings.</p>
       
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-10 mt-40'>
          {
            data.map(da=><UserReview key={da.id}  da={da}></UserReview>)
          }  
        </div>
        </div>
    );
};

export default Review;