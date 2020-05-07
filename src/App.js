import React from 'react';
import Navbar from  './components/Navbar/Navbar'
import LoginBox from './components/LoginBox.js'
import './index.css';
import SlideNav from './components/SlideNav';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <LoginBox />
      <Footer />
    </div>
  );
}

export default App;
