import React from 'react';
import passion3 from '../images/passion3.jpeg';

export default function Dash() {
  return (
    <div
      className='bg-cover bg-center '
      style={{
        backgroundImage: `url(${passion3})`,
      }}
    >
      <div className='max-w-screen-xl mx-auto flex md:flex-col px-4 py-12 justify-center items-start'>
        <div className='flex flex-col items-start'>
          <p className='text-black text-3xl mb-0' style={{ lineHeight: '1.2' }}>
            Dash ki sanskriti <br />
            Dash ka science
          </p>
          <p className='text-black text-xl mt-2' style={{ marginTop: '0' }}>
            Passion may be a friendly or eager interest in or admiration for a proposal, <br />
            cause, discovery, or activity or love to a feeling of excitement.
          </p>
        </div>
      </div>
    </div>
  );
}
