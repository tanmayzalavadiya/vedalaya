import React from "react";
import GoSleep from "./GoSleep";
import SuitableSleep from "../GoSleep/SuitableSleep";
import GoSleepProven from "./GoSleepProven";
import SleepRegulations from "../GoSleep/SleepRegulations";
import GoSleepResult from "../GoSleep/GoSleepResult";
import GoSleepIngredients from "./GoSleepIngredients";
import SleepEffect from "./SleepEffect";
import GoSleepDoctors from "./GoSleepDoctors";
import GoSleepConsultation from "./GoSleepConsultation";
import Science from "../../Home/Science";
import WhyUs from "../GoStrezz/WhyUs";
import GoSleepFaqs from "./GoSleepFaqs";
import GoSleepReviews from "./GoSleepReviews";
import Footer from "../../Footer/Footer";

export default function GoSleepPage() {
  return (
    <div>
      <GoSleep />
      <SuitableSleep />
      <SleepRegulations />
      <GoSleepResult />
      <GoSleepIngredients />
      <GoSleepProven />
      <SleepEffect />
      <GoSleepDoctors />
      <GoSleepConsultation />
      <Science />
      <WhyUs />
      <GoSleepFaqs />
      <GoSleepReviews />
      <Footer/>
    </div>
  );
}
