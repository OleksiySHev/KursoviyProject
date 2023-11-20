import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <div className="container">
              <Header/>
              <main className="main-content">
                  <App />
              </main>
              <Footer/>
          </div>
      </BrowserRouter>
  </React.StrictMode>
);