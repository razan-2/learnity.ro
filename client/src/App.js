import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// components
import NavBar from "./components/NavBar/NavBar";

// styles

// hooks

const AppLayout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const router = createBrowserRouter([{
  element: <AppLayout />,
  children: [
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/upcoming-events",
      element: <div>Upcoming events</div>
    },
    {
      path: "/profile",
      element: <div>Profile</div>
    },
    {
      path: "/newsletter",
      element: <div>Newsletter</div>
    },
  ]
}]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;