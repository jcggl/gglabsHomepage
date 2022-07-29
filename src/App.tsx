import React from 'react';
import HeaderPage from 'pages/HeaderPage'
import IntroductionPage from 'pages/IntroductionPage'
import ProjectPage from 'pages/ProjectPage';
import TeamPage from 'pages/TeamPage';
import PartnerPage from 'pages/PartnerPage';
import useWindowSize from 'hooks/useWindowSize';
import FooterPage from 'pages/FooterPage';
import ReactGA from 'react-ga'
import { WindowSizeContext } from 'contexts/WindowSizeContext';
import './App.scss';

function App() {
  const windowSize = useWindowSize()
  const trackingID:string = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID!
  ReactGA.initialize(trackingID)

  return (
    <WindowSizeContext.Provider
      value={windowSize}
    >  
      <div className="App">
        <HeaderPage />
        <section className='body-container'>
          <IntroductionPage />
          <ProjectPage />
          <TeamPage />
          <PartnerPage />
          <FooterPage />
        </section>
      </div>
    </WindowSizeContext.Provider>
  );
}

export default App;
