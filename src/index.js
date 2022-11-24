import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-jquery';

import Navbar from './components/navbar/navbar';
import TopNav from './components/navbar/top-nav';

function App() {
    return (
      <>
      <TopNav/>
      <Navbar/>
      </>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);

