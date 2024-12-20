import React from 'react'

export default function GoStrezzResult() {
  return (
    <div className='max-w-screen-xl mx-auto mb-5'>
          <div className='w-full text-center pt-4'>
        <h1 className='text-3xl text-black font-black pb-2'>What will the medicine do?</h1>
        <p className='text-black text-xl pb-4'>GoStrezz tablets reduce your Stress</p>
      </div>

      <div className='flex '>
        <div className='flex justify-around gap-6'>
        {/* card-1 */}
        
        <div className=' w-full md:w-1/3 flex flex-col md:flex-row border-2 py-4 px-4 rounded-tr-3xl rounded-bl-3xl bg-[#eef2ed] '>
            <div className='w-full md:w-[70%] flex flex-col'>
                <h1 className='text-2xl '>1st Month</h1>
                <p className='text-lg text-black'>Quality of sleep gets better, wake up energetic and fresh all day.</p>
            </div>
            <div className='w-full md:w-[30%] flex flex-col'>
                <img src="" alt="" />
            </div>
            </div> 

             {/* card-2 */}

             <div className=' w-full md:w-1/3 flex flex-col md:flex-row border-2 py-4 px-4 rounded-tr-3xl rounded-bl-3xl bg-[#eef2ed] '>
            <div className='w-full md:w-[70%] flex flex-col'>
                <h1 className='text-2xl '>1st Month</h1>
                <p className='text-lg text-black'>Quality of sleep gets better, wake up energetic and fresh all day.</p>
            </div>
            <div className='w-full md:w-[30%] flex flex-col'>
                <img src="" alt="" />
            </div>
            </div>

             {/* card-3 */}     

             <div className=' w-full md:w-1/3 flex flex-col md:flex-row border-2 py-4 px-4 rounded-tr-3xl rounded-bl-3xl bg-[#eef2ed] '>
            <div className='w-full md:w-[70%] flex flex-col'>
                <h1 className='text-2xl '>1st Month</h1>
                <p className='text-lg text-black'>Quality of sleep gets better, wake up energetic and fresh all day.</p>
            </div>
            <div className='w-full md:w-[30%] flex flex-col'>
                <img src="" alt="" />
            </div>
            </div>


        </div>
        
      </div>
    </div>
  )
}
