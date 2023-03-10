import React from "react";
import "./scss/app.scss";

import {Routes, Route} from 'react-router-dom'

import { Header } from "./components/Header";
import { Home } from "../src/pages/Home";
import {NotFound} from './pages/NotFound'
import {Cart} from './pages/Cart'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/cart.html" element={<Home/>}/>
            <Route path="/" element={<Cart />}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
