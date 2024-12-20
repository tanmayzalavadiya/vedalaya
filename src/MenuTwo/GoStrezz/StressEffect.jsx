import React from 'react';
import effect from '../../images/GoStrezz/effect.png';

export default function StressEffect() {
  return (
    <div className='max-scr mx-auto mb-10 flex flex-col items-center'>
      <h2 className='text-4xl font-bold text-center mb-6'>Long Term Effects of Stress</h2>
      <div className='flex justify-center'>
        <img src={effect} alt="Stress Effect" className='max-w-full h-auto' />
      </div>
    </div>
  );
}
