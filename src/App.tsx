import React from 'react'
import CitiesFetcher from './Components/CitiesFetcher'
import MainLayout from './Layout/MainLayout'

const App: React.FC = () => {
  return (
    <CitiesFetcher>
      <MainLayout />
    </CitiesFetcher>
  )
}

export default App
