import React from 'react';
import { DefaultNavbar, AboutMeNavbar } from './components/Layout';


export function AboutMeContainer({ children }) {
  return (
    <div className="App">
      <AboutMeNavbar />
      {children}
    </div>
  );
}

export function DefaultContainer({ children }) {
  return (
    <div className="App">
       <DefaultNavbar />
       {children} 
    </div>
  );
}
