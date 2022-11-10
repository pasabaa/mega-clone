import './App.css'
import { Dashboard } from './components/Dashboard'
import { SideBar } from './components/SideBar'

function App() {

  return (
    <div className='h-screen w-full flex'>
      <SideBar />
      <Dashboard />
    </div>
  )
}

export default App
