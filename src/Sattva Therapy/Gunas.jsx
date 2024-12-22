import React from 'react'

export default function Gunas() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className=''>
      <div className='mb-10 mt-10'>
          <h3 className='font-bold text-4xl text-black text-center'>
          GUNAS
          </h3>
          <p className='text-xl text-center mt-10 px-4'>Manas Roga occurs due to aggravation of Tamas and Rajas guna. It can be balanced by increasing Sattva Guna.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-around px-4 my-8 gap-6'>
  <div className='bg-white rounded-3xl flex flex-col items-center shadow-lg p-4 w-full md:w-1/3'>
    <h1 className='text-black font-bold text-4xl md:text-5xl mb-4'>Sattva</h1>
    <p className='text-black text-lg text-center'>Goodness, Positivity, Truth, Serenity, Balance, Peacefulness,
    Virtuousness, Knowledge, Harmony & Calmness</p>
  </div>

  <div className='bg-white rounded-3xl flex flex-col items-center shadow-lg p-4 w-full md:w-1/3'>
    <h1 className='text-black font-bold text-4xl md:text-5xl mb-4'>Rajas</h1>
    <p className='text-black text-lg text-center'>Dominating Mind, Excessive Movement / Fluctuations, Agitation,
    Turbulence, Tranquility, Physical excitement.</p>
  </div>

  <div className='bg-white rounded-3xl flex flex-col items-center shadow-lg p-4 w-full md:w-1/3'>
    <h1 className='text-black font-bold text-4xl md:text-5xl mb-4'>Tamas</h1>
    <p className='text-black text-lg text-center'>State of Mudh (Forgetful) mind, Dull, Inert, Devoid of qualities
    like Determination, Slothful, Darkness, Lazy & Heaviness.</p>
  </div>
</div>

    </div>
  )
}
