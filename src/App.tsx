
import React from 'react'



import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Personalization from './pages/Personalization'
import { Route, Routes } from 'react-router-dom';



function App() {
  // let page;
  // switch(window.location.pathname){
  //   case "/":
  //     page = <Home/>
  //     break
  //   case "/about":
  //     page = <About/>
  //     break
  //   case "/login":
  //     page = <Login/>
  //     break
  //   case "/signup":
  //     page = <SignUp/>
  //     break
  //   case "/personalization":
  //     page = <Personalization/>
  //     break
  //   case "/dashboard":
  //     page = <Dashboard/>
  //     break
  //   case "":
  //     page = <Home/>
  //     break
  //   case "/about/":
  //     page = <About/>
  //     break
  //   case "/login/":
  //     page = <Login/>
  //     break
  //   case "/signup/":
  //     page = <SignUp/>
  //     break
  //   case "/personalization/":
  //     page = <Personalization/>
  //     break
  //   case "/dashboard/":
  //     page = <Dashboard/>
  //     break

  // }

  return (
    <>
        <Navbar />
        <div><Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/personalization' element={<Personalization/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          </Routes></div>
    </>
  )
}

export default App
