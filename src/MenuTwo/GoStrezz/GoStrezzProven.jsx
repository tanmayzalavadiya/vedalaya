import React from 'react'

export default function GoStrezzProven() {
  return (
    <div className='max-w-screen-xl mx-auto mb-10'>
         <div className='w-full text-center pt-4'>
        <h1 className='text-3xl text-black font-black pb-2'>Clinically Proven Ingredients</h1>
      </div>

        <div className='flex gap-8'>
        <div className='w-full md:1/3 flex-col md:flex-row gap-8 py-4 px-4 rounded-tr-3xl rounded-bl-3xl bg-[#edf4f0]'>
            <p className='text-sm '>Study Type</p>
            <p className='text-sm text-black pb-6'>Ingredient</p>
            <h1 className='text-2xl text-black'>Ashwagandha</h1>
            <p className='text-sm '>Adaptogenic-Antistress effect</p>
            <button className='py-2 px-4 text-white bg-[#475449] rounded-3xl mt-14  '>Evidence</button>
        </div>


        <div className='w-full md:1/3 flex-col md:flex-row gap-8 py-4 px-4 rounded-tr-3xl rounded-bl-3xl bg-[#edf4f0]'>
            <p className='text-sm '>Study Type</p>
            <p className='text-sm text-black pb-6'>Efficiency</p>
            <h1 className='text-2xl text-black'>Brahmi</h1>
            <p className='text-sm '>Adaptogenic-Antistress effect</p>
            <button className='py-2 px-4 text-white bg-[#475449] rounded-3xl mt-14'>Evidence</button>
        </div>
        

        <div className='w-full md:1/3 flex-col md:flex-row gap-8 py-4 px-4 rounded-tr-3xl rounded-bl-3xl bg-[#edf4f0]'>
            <p className='text-sm '>Study Type</p>
            <p className='text-sm text-black pb-6'>Ingredient</p>
            <h1 className='text-2xl text-black'>Ashwagandha</h1>
            <p className='text-sm '>Neuropethic pain management</p>
            <button className='py-2 px-4 text-white bg-[#475449] rounded-3xl mt-14'>Evidence</button>
        </div>

        </div>

    </div>
  )
}
