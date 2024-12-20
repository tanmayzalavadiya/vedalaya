import React from 'react';
import vedalaya from '../images/vedalaya.png';

export default function Dash2() {
  return (
    <div className='max-w-screen-xl pt-10 pb-10 mx-auto flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 text-black text-justify'> {/* Added padding for better spacing */}
        
          Vedalay derived from the words “Veda” & “Alay” which literally means the House of Ayurveda. Contradictory to other medical sciences, Ayurveda believes that the mind, which is the governor of the body plays a vital role in any kind of lifestyle disorders. A recent study shows, over 80% of lifestyle disorders are psychosomatic in nature. Vedalay- House of Ayurveda was born out of the need to address these disorders through authentic Ayurveda Principles and Sattva Therapy. A place where tradition meets innovation and where one can experience the ancient art of holistic healing in the present day world. It is a result of Dr. Vinay Vora's experience and practice in the field of Ayurveda. Good health and well-being is a result of following your body's natural cycles. These are the fundamentals that Vedalay has based its Ayurvedic healthcare products on.
        
      </div>

      <div className='w-full md:w-1/2 p-4 flex justify-center items-center'> {/* Center the image */}
        <img src={vedalaya} alt="vedalaya logo" className="max-w-full h-auto" /> {/* Responsive image */}
      </div>
    </div>
  );
}
