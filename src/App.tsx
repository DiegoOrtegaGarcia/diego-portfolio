import './App.css'
import {Dashboard} from './core/components/Dashboard'
import { useThemeStore } from './core/storage/themeStorage'
import { AboutMeContainer } from './modules/AboutMe/container/AboutMeContainer'
import { FooterContainer } from './modules/Footer/Container/FooterContainer'
import { HomeContainer } from './modules/home/components/homeContainer'
import { ProjectsContainer } from './modules/proyects/container/proyectsContainer'
import { TechnologiesContainer } from './modules/tecnologias/container/tecnologiasContainer'


function App() {
  const { darkMode } = useThemeStore();
  return (
     <main className={`${darkMode ? "bg-black" : "bg-white"} transition-colors duration-500 ease-in-out`}>
      <Dashboard/>
      <section>
        <HomeContainer/>
      </section>
      <section>
        <ProjectsContainer></ProjectsContainer>
      </section>
      <section>
        <AboutMeContainer></AboutMeContainer>
      </section>
      <section>
        <TechnologiesContainer></TechnologiesContainer>
      </section>
      <section>
        <FooterContainer></FooterContainer>
      </section>
    </main>
  )
}

export default App
