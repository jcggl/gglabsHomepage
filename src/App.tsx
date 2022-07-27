import React from 'react';
import './App.scss';
import HeaderPage from 'pages/HeaderPage'
import IntroductionPage from 'pages/IntroductionPage'
import useWindowSize from 'hooks/useWindowSize';
import { WindowSizeContext } from 'contexts/WindowSizeContext';

function App() {
  const windowSize = useWindowSize()

  return (
    <WindowSizeContext.Provider
      value={windowSize}
    >  
      <div className="App">
        <HeaderPage />
        <section className='body-container'>
          <IntroductionPage />
        </section>
      </div>
    </WindowSizeContext.Provider>
  );
}

export default App;
