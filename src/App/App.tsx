import { AppHeader } from './AppHeader/AppHeader'
import MainScreen from '../components/MainScreen.tsx'
import { Attainment } from '../components/Attainment.tsx'
import { OurServices } from '../components/OurServices.tsx'
import { AllServices } from '../components/AllServices.tsx'
import { Advertising } from '../components/Advertising.tsx'
import { ChecksProblems } from '../components/ChecksProblems.tsx'
import { Problems } from '../components/Problems.tsx'
import { WhyWe } from '../components/WhyWe.tsx'
import { Stages } from '../components/Stages.tsx'
import { WhatIGet } from '../components/WhatIGet.tsx'
import { Reviews } from '../components/Reviews.tsx'
import { ProblemsInSalons } from '../components/ProblemsInSalons.tsx'

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
      <Problems />
      <WhyWe />
      <Stages />
      <WhatIGet />
      {/*<Advertising />*/}
      <Reviews />
      <ProblemsInSalons />
    </>
  )
}

export default App
