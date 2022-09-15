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

function App() {
  const windowSize = useWindowSize()
  const trackingID:string = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID!
  ReactGA.initialize(trackingID)

  return (
    <WindowSizeContext.Provider
      value={windowSize}
    >  
      <div className={String.raw`w-screen min-w-[360px] flex flex-col justify-start items-center`}>
        <HeaderPage />
        <section className={String.raw`w-full bg-black flex flex-col justify-start items-center`}>
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
