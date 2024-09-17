import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { NotFound } from './components/NotFound/NotFound';
import { About } from './pages/About/About';

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about-us',
      element: <About />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return element;
}

export default App
