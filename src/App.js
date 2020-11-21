import React from 'react'
import DataProvider  from './context/contextCountry';
import { AppRouter } from './routes/AppRouter';

function App() {

  return (
    < DataProvider>
      <AppRouter />
    </ DataProvider>
  );
}

export default App;
