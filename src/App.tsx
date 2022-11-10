import React from 'react';
import './App.css';
import { Footer, Navbar } from './components';
import { CallToAction, Contributing, Featured, Fundraise, Header, News } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Contributing />
      <Featured />
      <Fundraise />
      <News />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
