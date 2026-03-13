import { createContext, useContext, useState, useEffect } from 'react'
import { initialData } from '../data/initialData'

const DataContext = createContext()

export function DataProvider({ children }) {
  const [siteData, setSiteData] = useState(() => {
    const saved = localStorage.getItem('new_ss_events_data_v2')
    return saved ? JSON.parse(saved) : initialData
  })

  useEffect(() => {
    localStorage.setItem('new_ss_events_data_v2', JSON.stringify(siteData))
  }, [siteData])

  const updateData = (newData) => {
    setSiteData(newData)
  }

  const addItem = (category, item) => {
    setSiteData(prev => ({
      ...prev,
      [category]: [...prev[category], { ...item, id: Date.now() }]
    }))
  }

  const deleteItem = (category, id) => {
    setSiteData(prev => ({
      ...prev,
      [category]: prev[category].filter(item => item.id !== id)
    }))
  }

  return (
    <DataContext.Provider value={{ siteData, updateData, addItem, deleteItem }}>
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext)
  if (!context) throw new Error('useData must be used within DataProvider')
  return context
}
