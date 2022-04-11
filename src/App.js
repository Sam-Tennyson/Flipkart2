import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Home from './component/Home';
import Test from './component/Test'
import Login from "./component/Login"
import Signup from './component/Signup'
import CardNew from './component/CardNew';
import PageNotFound from './component/PageNotFound';
import Carts from './component/Carts';
import NewPage from "./component/NewPage"

const App = () => {
  
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/test" element={<Test />}/>
          <Route path="/signin" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/carts/:id" element={<Carts />}/>
          <Route path="/product/:id" element={<CardNew />}/>
          <Route path="/Home/:id" element={<NewPage />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      
    </>
  )
}

export default App
