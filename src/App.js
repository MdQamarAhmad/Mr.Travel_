import React, { Component } from 'react'
import Login from './Login.js';
import Main from './Main.js';
import Login1 from './Login1.js'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path='*' element={<Main/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Login1' element={<Login1/>}/>
            </Routes>
        </Router>
      </>
    )
  }
}