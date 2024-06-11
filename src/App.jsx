import { useState } from 'react'
import './App.css'
import MainContent from './components/MainContent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Azk from './components/Azk'
import Azkair from './components/Azkair'
import Radeu from './components/Radeu'
import Aldetails from './components/Aldetails'
import Footer from './components/Footer'
import Quran from './components/Quran'
import Altafsir from './components/Altafsir'
import Tafsier from './components/Tafsier'
import { Muslim } from './components/Muslim'
import Uran from './components/Uran'
import Hanbal from './components/Hanbal'
import Daood from './components/Daood'
import Tirmidzi from './components/Tirmidzi'
import Bukhari from './components/Bukhari'
import Az from './components/Az'
import Morning from './components/Morning'
import Evening from './components/Evening'

function App() {

  return (
    <>

<Router> 
<Aldetails/>
    <Routes>

      <Route path='/' element={ <MainContent/>} />
     <Route path='/malk' element={<Azk/>}/>
     <Route path='/Hadis' element={<Azkair/>}/>
     <Route path='/Magah' element={<Uran/>}/>
     <Route path='/Hanbal' element={<Hanbal/>}/>
     <Route path='/Daood' element={<Daood/>}/>
     <Route path='/Tirmidzi' element={<Tirmidzi/>}/>
     <Route path='/Bukhari' element={<Bukhari/>}/>
     <Route path='/Azkair' element={<Az/>}/>
     <Route path='/Morning' element={<Morning/>}/>
     <Route path='/Evening' element={<Evening/>}/>

     <Route path='/Ayat' element={<Altafsir/>}/>
     <Route path='/Radeu' element={<Radeu/>}/>
     <Route path='/quran/:number' element={<Quran/>}/>
     <Route path='/quran/tafsir/:number' element={<Tafsier/>}/>
     <Route path='/Muslim' element={<Muslim/>}/>

    </Routes>
    <Footer/>
  </Router>




    </>
  )
}

export default App
