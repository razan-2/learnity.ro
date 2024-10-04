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

// ! 2 octombrie

// TODO: sectiunea de doneaza
// TODO: sectiunea de about
// TODO: sectiunea de guided
// TODO: sectiunea de header (fara titirezul nebun)

// ! 3 octombrie

// TODO: sectiunea de poveste (design al scrisului)
// TODO: sectiunea de principii

// ! 4 octombrie
