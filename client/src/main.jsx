import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// TODO: playground: fireplace, tower, arena, roots design
// TODO: playground: events presentation section
// TODO: automate things to be able to reuse these in the Playground page.
// TODO: sectiunea de testimoniale
