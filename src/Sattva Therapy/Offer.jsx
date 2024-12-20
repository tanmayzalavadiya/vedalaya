import React from 'react'
import who from '../images/who.png'

export default function Offer() {
  return (
    <div className='max-w-screen-xl mx-auto mb-10'>
        <div className='pt-5 pb-5'>
            <h3 className='font-bold text-3xl text-black text-center'>What We Offer for You</h3>
        </div>

    <div className="flex flex-col-reverse md:flex-row">
  {/* Text Section */}
  <div className="w-full md:w-[60%] flex flex-col items-center md:items-start p-4">
    <p className='text-black text-lg text-justify pb-5'>
      Sattva means Maan (Mind) and Avajaya means to win or conquer. Hence sattvavajaya means to conquer one’s mind and resist from the things that are not good for the body. Sattvavajaya chikitsa plays a significant role in maintaining a healthy and harmonious life because it not only prevents the impairments of Dhee, Dhriti and Smriti, it helps them in bringing in a state of balance.
    </p>
    <p className='text-black text-lg text-justify pb-5'>
      A person is called healthy not only when his doshas are balanced, but also the Manas should be in balance in presence of Atma for proper and healthy state of body. As per WHO definition of health, “Health is a state of complete physical, mental, and social well-being and not merely absence of disease or infirmity.”
    </p>
    <p className='text-black text-lg text-justify pb-5'>
      Sattva plays a huge role in keeping a person healthy even during the time of any physical disorder.
    </p>
    <p className='text-black text-lg text-justify pb-5'>
      Nowadays, modern research shows that 80-90% disorders are psychosomatic in nature due to a stressful life and irregular daily routines. Ayurveda gives more emphasis on Sattvavajaya chikitsa in managing Manovikar, as well as physiological.
    </p>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-[40%] flex justify-center p-4">
    <img src={who} alt="who logo" className="w-full h-auto object-contain" />
  </div>
</div>


      
    </div>
  )
}
