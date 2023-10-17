import React from 'react';
import Navbar from './components/Navbar';
import TournamentSearch from './components/TournamentSearch';
import TournamentsList from './components/TournamentsList';

function App() {
  return (
    <>
      <Navbar />
      <TournamentSearch />
      <TournamentsList />
    </>
  );
}

export default App;
