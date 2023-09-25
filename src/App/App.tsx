import { AppHeader } from './AppHeader/AppHeader'
import MainScreen from '../components/MainScreen.tsx'
import { Attainment } from '../components/Attainment.tsx'
import { OurServices } from '../components/OurServices.tsx'
import { AllServices } from '../components/AllServices.tsx'
import { Advertising } from '../components/Advertising.tsx'
import { ChecksProblems } from '../components/ChecksProblems.tsx'
import { WhyWe } from '../components/WhyWe.tsx'
import { Stages } from '../components/Stages.tsx'
import { WhatIGet } from '../components/WhatIGet.tsx'
import { Reviews } from '../components/Reviews.tsx'
import { ProblemsInSalons } from '../components/ProblemsInSalons.tsx'
import {Footer} from "../components/Footer.tsx";

import buttonLeft from '../assets/Buttons/buttonLeft.svg'
import buttonRight from '../assets/Buttons/buttonRigth.svg'
import { REVIEWS } from '../constants/reviews.ts'

function App() {
  return (
    <>
      <AppHeader />
      <MainScreen />
      <Attainment />
      <OurServices />
      <AllServices />
      <Advertising />
      <ChecksProblems />
      <WhyWe />
      <Stages />
      <WhatIGet />
      <Advertising />
      <Reviews REVIEWS={REVIEWS} buttonLeft={buttonLeft} buttonRight={buttonRight} />
      <ProblemsInSalons />
        <Footer/>
    </>
  )
}

export default App
