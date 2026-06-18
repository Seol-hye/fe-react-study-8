import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { Routes, Route, Link, useNavigate } from 'react-router';

import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Cart from './pages/Cart';
import Info from './pages/Info';

function App() {

    let navigate = useNavigate();

    return (
        <div>
            <div>
                <button> <Link to="/">Main</Link></button>
                <button onClick={() => { navigate("/info") }}>/info</button>
                <button onClick={() => { navigate("/mypage") }}>/mypage</button>
                <button onClick={() => { navigate("/cart") }}>/cart</button>
            </div>

            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/info' element={<Info />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/cart' element={<Cart />} />

            </Routes>
        </div>
  )
}

export default App
