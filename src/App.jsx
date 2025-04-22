import React, { useState } from 'react'
import HeaderSection from './sections/HeaderSection'
import ContextSection from './sections/ContextSection'

const App = () => {
  
  return (
    <main className='container mx-auto max-w-7xl'>
      <HeaderSection />
      <ContextSection />
    </main>
  )
}

export default App