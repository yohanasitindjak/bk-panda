import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard.jsx'
import Sidebar from './components/Sidebar'
import Tatib from './components/Tatib'
import Document from './components/Document'
import History from './components/History'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Wellcome from './components/Wellcome'
import Login from './components/Login'

function  App() {
  return (
    <div className="homepage">
      <Router>
      <Sidebar />
        <Routes>
          <Route path='/' element={<Wellcome />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/history' element={<History />} />
          <Route path='/document' element={<Document />} />
          <Route path='/tatib' element={<Tatib />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
