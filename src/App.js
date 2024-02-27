import React from 'react'
import './App.css';
import Main from './main';
import Footer from './footer';

function App() {
  return (
    <>
      <div className="logo">
        <img src="assets/logo.png" alt="logo" />
      </div>
      <Main />
      <Footer/>
    </>

  )
}

export default App