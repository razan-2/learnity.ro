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
          path: '/about-us',
          element: <About />
        },
        {
          path: '/account',
          element: <MyAccount />
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
          path: '*',
          element: <NotFound />
        }
      ]
    },
  ]);

  return element;
}

export default App
