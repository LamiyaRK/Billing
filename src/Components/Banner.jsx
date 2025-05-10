import React from 'react';

const Banner = () => {
    return (
        <div>
          <div
  className="hero w-11/12 mx-auto  my-20 p-5 rounded-2xl text-accent"
  style={{
    backgroundImage:"url(bg.jpg)",
      
  }}
>
  
  <div className=" flex flex-col gap-5 lg:flex-row justify-around  border-white items-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Pay Your Bills the Smart Way</h1>
      <p className="mb-5">
      Manage and pay your electricity, gas, water, and internet bills — all in one place. Fast, secure, and available 24/7 from anywhere in Bangladesh.
      </p>
      <button className="btn btn-accent btn-outline text-white">Get Started</button>
    </div>
    <div className="w-full lg:w-[30%]">
        <img src='/1st.jpg' ></img>
    </div>
  </div>
</div>
  
        </div>
    );
};

export default Banner;