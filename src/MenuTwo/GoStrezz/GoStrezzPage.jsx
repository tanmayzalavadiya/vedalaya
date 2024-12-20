import React from 'react'
import GoStrezz from './GoStrezz'
import Suitable from './Suitable'
import Regulations from './Regulations'
import GoStrezzResult from './GoStrezzResult'
import GoStrezzIngredients from './GoStrezzIngredients'
import GoStrezzVideo from './GoStrezzVideo'
import GoStrezzProven from './GoStrezzProven'
import GoStrezzImunity from './GoStrezzImunity'
import Symptoms from './Symptoms'
import StressEffect from './StressEffect'
import GoStrezzDoctors from './GoStrezzDoctors'
import Consultation from '../../Home/Consultation'
import Science from '../../Home/Science'
import WhyUs from './WhyUs'
import FAQs from './FAQs'
import Reviews from './Reviews'
import Footer from '../../Footer/Footer'
export default function GoStrezzPage() {
  return (
    <div>
      <GoStrezz/>
      <Suitable/>
      <Regulations/>
      <GoStrezzResult/>
      <GoStrezzIngredients/>
      <GoStrezzVideo/>
      <GoStrezzProven/>
      <GoStrezzImunity/>
      <Symptoms/>
      <StressEffect/>
      <GoStrezzDoctors/>
      <Consultation/>
      <Science/>
      <WhyUs/>
      <FAQs/>
      <Reviews/>
      <Footer/>
    </div>
  )
}
