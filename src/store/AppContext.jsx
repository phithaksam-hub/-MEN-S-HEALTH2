import { createContext, useContext, useEffect, useState } from 'react'
import { weekPlan as initialWeekPlan } from '../data/workouts.js'
import { initialMeals, nutritionOverview } from '../data/nutrition.js'
import { sleepHistory as initialSleepHistory, sleepSchedule as initialSleepSchedule } from '../data/sleep.js'

const STORAGE_KEY = 'vertex-dashboard-state-v1'

const defaultProfile = {
  name: 'Alex Carter',
  age: 28,
  height: 178, // cm
  weight: 74, // kg
  goal: 'Build Muscle',
}

const defaultSettings = {
  darkMode: true,
  notifications: true,
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const persisted = loadState()

  const [weekPlan, setWeekPlan] = useState(persisted?.weekPlan ?? initialWeekPlan)
  const [meals, setMeals] = useState(persisted?.meals ?? initialMeals)
  const [waterIntake, setWaterIntake] = useState(persisted?.waterIntake ?? nutritionOverview.water.current)
  const [sleepHistory, setSleepHistory] = useState(persisted?.sleepHistory ?? initialSleepHistory)
  const [sleepSchedule, setSleepSchedule] = useState(persisted?.sleepSchedule ?? initialSleepSchedule)
  const [profile, setProfile] = useState(persisted?.profile ?? defaultProfile)
  const [settings, setSettings] = useState(persisted?.settings ?? defaultSettings)

  useEffect(() => {
    const state = { weekPlan, meals, waterIntake, sleepHistory, sleepSchedule, profile, settings }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [weekPlan, meals, waterIntake, sleepHistory, sleepSchedule, profile, settings])

  function toggleExerciseDone(day, exIndex) {
    setWeekPlan((prev) =>
      prev.map((d) =>
        d.day === day
          ? {
              ...d,
              exercises: d.exercises.map((ex, i) => (i === exIndex ? { ...ex, done: !ex.done } : ex)),
            }
          : d
      )
    )
  }

  function addMeal(meal) {
    setMeals((prev) => [...prev, meal])
  }

  function addWater(amount) {
    setWaterIntake((prev) => Math.max(0, Math.round((prev + amount) * 10) / 10))
  }

  function updateSleepEntry(day, hours) {
    setSleepHistory((prev) => prev.map((d) => (d.day === day ? { ...d, hours } : d)))
  }

  function updateProfile(patch) {
    setProfile((prev) => ({ ...prev, ...patch }))
  }

  function updateSettings(patch) {
    setSettings((prev) => ({ ...prev, ...patch }))
  }

  const value = {
    weekPlan,
    toggleExerciseDone,
    meals,
    addMeal,
    waterIntake,
    addWater,
    sleepHistory,
    sleepSchedule,
    updateSleepEntry,
    profile,
    updateProfile,
    settings,
    updateSettings,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
