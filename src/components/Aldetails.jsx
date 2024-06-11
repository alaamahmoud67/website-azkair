
import React from 'react'
import { Link } from 'react-router-dom'

export default function Aldetails() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      
        <li className="nav-item">
        <Link to={"/Quran"} className='nav-link 'aria-current="page">
          <p>القرآن الكريم</p>
    </Link>
        </li>
        <li className="nav-item">
        <Link to={"/Radeu"} className='nav-link 'aria-current="page">
          <p>راديو</p>
    </Link>
        </li>
       
        <li className="nav-item">
        <Link to={"/Hadis"} className='nav-link 'aria-current="page">
          <p>أحاديث</p>
    </Link>
        </li>
       
        <li className="nav-item">
        <Link to={"/"} className='nav-link active'aria-current="page">
          <p>الصفحة الرئيسية</p>
    </Link>
        </li>
      </ul>
    </div>

    <Link to={"/"} className='navbar-brand'>
<h3 className='mb'>♡ قرآنك </h3>
    </Link>
  </div>
</nav>
    
    
    </>
  )
}

