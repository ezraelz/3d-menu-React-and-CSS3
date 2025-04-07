import { lazy, Suspense } from 'react';
import './App.css';
import Nav from './component/nav.jsx';
import './component/nav.css';

const Home = lazy(() => import('./component/home.jsx'));
const About = lazy(() => import('./component/about.jsx'));

function App() {
  return (
    <div className="App">
      {/* Render the lazy-loaded component */}
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
      <Nav />
    </div>
  );
}

export default App;
