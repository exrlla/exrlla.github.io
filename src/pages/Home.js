import React from 'react';
import HomeSidebar from '../components/HomeSidebar';
import './Page.css';

function Home() {
  return (
    <div className="home-container">
      <div className="page">
        <h1>Hi. This is Estrella (Ellie) Popoca's <i>corner</i> <br/> of the internet. </h1>
        <div className="page-content">
          <p>I go by Ellie! I'm a technologist, developer, writer, and creator from Chicago, Illinois and I currently <br />
          create computer science courses and film content for <a href="https://codédex.com" target="_blank" rel="noopener noreferrer">Codédex</a>. </p>
          <p>I'm a graduate from UIUC where I studied Information Science and Game Design. Now, I'm <br /> 
          pursuing an MS HCI @ DePaul University. I love learning, creating art, and bulding joyful experiences.</p>
        </div>
      </div>
      <HomeSidebar />
    </div>
  );
}

export default Home;
