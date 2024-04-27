import React from 'react';
import './App.css';
const Home = React.lazy(() => import('./Pages/Home'));

function App() {

  return (
    <React.Suspense fallback={<h3>Loading...</h3>}><Home /></React.Suspense>
  );
}

export default App;