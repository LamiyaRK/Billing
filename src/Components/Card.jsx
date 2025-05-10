import React from 'react';

const Card = ({da}) => {
    const {name,logo,category,description}=da
    return (
        <div>
            <div class="card bg-primary  h-full shadow-sm p-3 text-accent">
  <figure>
    <img
      src={logo}
      className='h-[300px]'
       />
  </figure>
  <div class="card-body">
    <h2 class="card-title text-2xl">
     { name}
      <div class="badge badge-info text-white ">{category}</div>
    </h2>
    <p className='text-xl'>{description}</p>
    
  </div>
</div>
        </div>
    );
};

export default Card;