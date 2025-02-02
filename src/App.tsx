
import React from 'react'



import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Personalization from './pages/Personalization'



function App() {
  let page;
  console.log(window.location.pathname);
  switch(window.location.pathname){
    case "/":
      page = <Home/>
      break
    case "/about":
      page = <About/>
      break
    case "/login":
      page = <Login/>
      break
    case "/signup":
      page = <SignUp/>
      break
    case "/personalization":
      page = <Personalization/>
      break
    case "/dashboard":
      page = <Dashboard/>
      break
    case "":
      page = <Home/>
      break
    case "/about/":
      page = <About/>
      break
    case "/login/":
      page = <Login/>
      break
    case "/signup/":
      page = <SignUp/>
      break
    case "/personalization/":
      page = <Personalization/>
      break
    case "/dashboard/":
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
