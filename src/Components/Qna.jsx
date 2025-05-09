import React from 'react';

const Qna = ({da}) => {
    return (
        <div className='w-11/12 mx-auto  text-accent '>
            <div tabindex="0" class="collapse collapse-arrow bg-primary border-base-300 border">
  <div class="collapse-title font-semibold">{da.question}</div>
  <div class="collapse-content text-sm">
  {da.answer}
  </div>
</div>
        </div>
    );
};

export default Qna;