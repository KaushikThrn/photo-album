import React from 'react';
import logo from './logo.svg';
import './App.css';
import Album from './components/Album'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Header />
      <Album />
      <Sidebar />
    </div>
  );
}

export default App;
