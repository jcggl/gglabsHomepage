import React from 'react';
import './App.scss';
import HeaderPage from 'pages/HeaderPage'
import IntroductionPage from 'pages/IntroductionPage'

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <section className='body-container'>
        <IntroductionPage />
      </section>
    </div>
  );
}

export default App;
