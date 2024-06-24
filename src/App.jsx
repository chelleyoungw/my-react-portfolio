// Imports required imports from React.
import React from 'react';
import { Outlet } from 'react-router-dom';

// Imports repeated components for header and footer.
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />  
    </>
  );
}

export default App;
