import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import MainContentContainer from './components/MainContent';

function App({language}) {
  return (
    <div className="App">
      <HeaderContainer />
      <MainContentContainer />
    </div>
  );
}
export default App;
