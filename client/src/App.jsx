import React from 'react';
import { useRoutes, Outlet } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { NotFound } from './components/NotFound/NotFound';
import { About } from './pages/About/About';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { MyAccount } from './pages/AccountRelated/MyAccount';
import { NewsMainPage } from './pages/News/NewsMainPage';
import { UpcomingEvents } from './pages/UpcomingEvents/UpcomingEvents';
import Playground from './pages/Playground/Playground';
import Guided from './pages/Guided/Guided';
import Doneaza from './pages/Doneaza/Doneaza';
import ComingSoon from './components/ComingSoon/ComingSoon';

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/account',
          element: <ComingSoon />
        },
        {
          path: '/upcoming-events',
          element: <UpcomingEvents />
        },
        {
          path: './news',
          element: <NewsMainPage />
        },
        {
          path: '/about-us',
          element: <About />
        },
        {
          path: '/playground',
          element: <Playground />
        },
        {
          path: '/guided-learning',
          element: <Guided />
        },
        {
          path: '/doneaza',
          element: <Doneaza />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    },
  ]);

  return element;
}

export default App
