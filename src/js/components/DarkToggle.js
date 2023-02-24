import React, { useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import './DarkToggle.css'

const DarkToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = async () => {
    const darkModeEnabled = await window.darkMode.toggle()
    setIsDarkMode(darkModeEnabled)
  }

 {/*
  const resetToSystemTheme = async () => {
    await window.darkMode.system()
    setIsDarkMode(false)
  }
*/}

  return (
    <div className='dark-toggle'>
      <button className='dark-toggle-button' onClick={toggleDarkMode}>
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </button>

      
    </div>
  )
}

export default DarkToggle