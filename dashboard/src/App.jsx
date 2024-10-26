import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <div className="flex h-screen dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
      <RightPanel />
    </div>
  );
}

export default App;
