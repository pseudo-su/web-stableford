import React from 'react';

import AboutMe from './AboutMe';
import Connections from './Connections';
import ContactMe from './ContactMe';
import HomeSplash from './HomeSplash';
import Experience from './Experience';
import { ProjectCardList } from '../Projects';

export default function Homepage() {
  return (
    <div style={{ height: '100%' }}>
      <HomeSplash />
      <AboutMe />
      <ProjectCardList />
      <Experience />
      <Connections />
      <ContactMe />
    </div>
  );
}
