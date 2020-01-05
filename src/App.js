import React from 'react';
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
