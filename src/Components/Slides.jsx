import React from 'react';

const Slides = ({da}) => {
    return (
        <div>
            <img ></img>
            <div class="card image-full shadow-sm border-white">
  <figure>
    <img
      src={da.img}
       />
  </figure>
  <div class="card-body  items-center justify-center min-h-full text-4xl ">
    <p className='pt-[40%] text-center font-semibold text-accent text-shadow-2xs' >{da.details}</p>
  </div>
</div>
        </div>
    );
};

export default Slides;