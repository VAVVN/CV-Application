import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'  

function App() {
  return (
    <>
      <h1>My CV application</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </>
  )
}

export default App
