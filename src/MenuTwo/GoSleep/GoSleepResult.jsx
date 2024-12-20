import React from 'react'

export default function GoSleepResult() {
  return (
    <div className='max-w-screen-xl mx-auto mb-5'>
          <div className='w-full text-center pt-4'>
        <h1 className='text-3xl text-black font-black pb-2'>What will the medicine do?</h1>
        <p className='text-black text-xl pb-4'>GoSleep tablets reduce your Stress</p>
      </div>

      <div className='flex '>
        <div className='flex justify-around gap-6'>
        {/* card-1 */}
        
        <div className=' w-full md:w-1/3 flex flex-col md:flex-row border-2 py-4 px-4 rounded-tr-3xl rounded-bl-3xl bg-[#eff4f9] '>
            <div className='w-full md:w-[70%] flex flex-col'>
                <h1 className='text-2xl '>1st Month</h1>
                <p className='text-lg text-black'>Reduction in the time to fall asleep, fixes your wake up time</p>
            </div>
            <div className='w-full md:w-[30%] flex flex-col'>
                <img src="" alt="" />
            </div>
            </div> 

             {/* card-2 */}

             <div className=' w-full md:w-1/3 flex flex-col md:flex-row border-2 py-4 px-4 rounded-tr-3xl rounded-bl-3xl bg-[#eff4f9] '>
            <div className='w-full md:w-[70%] flex flex-col'>
                <h1 className='text-2xl '>1st Month</h1>
                <p className='text-lg text-black'>Regulates sleep cycle, waking up fresh and energetic</p>
            </div>
            <div className='w-full md:w-[30%] flex flex-col'>
                <img src="" alt="" />
            </div>
            </div>

             {/* card-3 */}     

             <div className=' w-full md:w-1/3 flex flex-col md:flex-row border-2 py-4 px-4 rounded-tr-3xl rounded-bl-3xl bg-[#eff4f9] '>
            <div className='w-full md:w-[70%] flex flex-col'>
                <h1 className='text-2xl '>1st Month</h1>
                <p className='text-lg text-black'>Enhances your deep sleep and improves overall sleep quality</p>
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
