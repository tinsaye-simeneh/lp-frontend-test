import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-jquery';


import Home from './components/home/home';
import CoursePage from './components/Courses/courses';
import Navbar from './components/navbar/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Navbar/>
);

