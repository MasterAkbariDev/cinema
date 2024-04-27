import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
const Home = React.lazy(() => import('./Pages/Home'));

function App() {

  return (
    <Routes>
      <Route index element={<React.Suspense fallback={<h3>Loading...</h3>}><Home /></React.Suspense>} />
    </Routes>
  );
}

export default App;