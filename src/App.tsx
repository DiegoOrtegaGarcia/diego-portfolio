import './App.css'
import {Dashboard} from './core/components/Dashboard'
import { HomeContainer } from './modules/home/components/homeContainer'

function App() {
  return (
    <>
    <Dashboard/>
    <section className='mt-10 md:mt-0'>
      <HomeContainer/>
    </section>
    </>
  )
}

export default App
