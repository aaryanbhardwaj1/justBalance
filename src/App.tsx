
import React from 'react'



import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
// import Personalization from './pages/Personalization'



function App() {
  let page;
  switch(window.location.pathname){
    case "/justBalance/":
      page = <Home/>
      break
    case "/justBalance/about/":
      page = <About/>
      break
    case "/justBalance/login/":
      page = <Login/>
      break
    case "/justBalance/signup/":
      page = <SignUp/>
      break
    case "/justBalance/personalization/":
      // page = <Personalization/>
      break
      case "/justBalance/dashboard/":
        page = <Dashboard/>
        break

  }

  return (
    <>
        <Navbar />
        <div>{page}</div>
    </>
  )
}

export default App
