import React, { useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll';
import Home from '../pages/Home'
import FloatingChat from './components/FloatingChat';



const App = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])

  return (
    <main className='w-full relative h-[110vh] bg-secondary'>
            
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <FloatingChat />
    </main>
  )
}

export default App