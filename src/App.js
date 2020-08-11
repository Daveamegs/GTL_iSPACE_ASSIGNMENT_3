import React from 'react';
import './App.css';
import './css/components.css';
import './css/global.css';
import './css/layout.css';
import './css/sample-wallpaper.css';
import Navbar from './components/navbar/Navbar';
import HeaderContent from './components/headerContent/HeaderContent';

function App() {
  return (
    <div>
      <Navbar />
      <HeaderContent />
    </div>
  );
}

export default App;
