import { useState } from 'react'
import { AppProvider } from './store/AppContext.jsx'
import Sidebar from './components/Sidebar.jsx'
import MobileNav from './components/MobileNav.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Nutrition from './pages/Nutrition.jsx'
import Workout from './pages/Workout.jsx'
import Sleep from './pages/Sleep.jsx'
import HealthTips from './pages/HealthTips.jsx'
import ExerciseLibrary from './pages/ExerciseLibrary.jsx'
import WeeklyReport from './pages/WeeklyReport.jsx'
import Settings from './pages/Settings.jsx'

const PAGES = {
  dashboard: Dashboard,
  nutrition: Nutrition,
  workout: Workout,
  sleep: Sleep,
  'health-tips': HealthTips,
  'exercise-library': ExerciseLibrary,
  'weekly-report': WeeklyReport,
  settings: Settings,
}

function AppShell() {
  const [activePage, setActivePage] = useState('dashboard')

  const ActivePageComponent = PAGES[activePage] ?? Dashboard

  function handleNavigate(page) {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-base-950 text-white font-body flex">
      <Sidebar activePage={activePage} onNavigate={handleNavigate} />
      <div className="flex-1 min-w-0 flex flex-col">
        <MobileNav activePage={activePage} onNavigate={handleNavigate} />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8 pb-24 lg:pb-8 max-w-[1400px] w-full mx-auto">
          <ActivePageComponent onNavigate={handleNavigate} />
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  )
}
