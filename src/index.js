import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './index.css';

import App from './App';
// Class Material
import Week901FirstComponent from './classMaterial/week9/Week901FirstComponent';
import Week902Parent from './classMaterial/week9/Week902Parent';
import Week903Form from './classMaterial/week9/Week903Form';
import Week1001PropsParent from './classMaterial/week10/Week1001PropsParent';
import Week1002useState from './classMaterial/week10/Week1002useState';
import Week1003useEffect from './classMaterial/week10/Week1003useEffect';
import Week1004EventsP from './classMaterial/week10/Week1004EventsP';
import Week1005Forms from './classMaterial/week10/Week1005Forms';
// Class Projects
import Project30Parent from './classProjects/Project30/Project30Parent';
import Project31Form from './classProjects/Project31/Project31Form';
import Project32Parent from './classProjects/Project32/Project32Parent';
import Project33State from './classProjects/Project33/Project33State';
import Project34useEffect from './classProjects/Project34/Project34useEffect';
import Project35Forms from './classProjects/Project35/Project35Forms';
import Project36 from './classProjects/Project36/Project36';
import Project37 from './classProjects/Project37/Project37';
// Homework
import Week9HWFramerMotion from './homeWork/week9/Week9HWFramerMotion';
import Week10HWPlaceHolder from './homeWork/week10/Week10HWPlaceHolder';

ReactDOM.render(
	// prettier-ignore
	<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Class Material */}
        <Route path="/classMaterial/week9_01" element={<Week901FirstComponent />} />
        <Route path="/classMaterial/week9_02" element={<Week902Parent />} />
        <Route path="/classMaterial/week9_03" element={<Week903Form />} />
        <Route path="/classMaterial/week10_01" element={<Week1001PropsParent />} />
        <Route path="/classMaterial/week10_02" element={<Week1002useState />} />
        <Route path="/classMaterial/week10_03" element={<Week1003useEffect />} />
        <Route path="/classMaterial/week10_04" element={<Week1004EventsP />} />
        <Route path="/classMaterial/week10_05" element={<Week1005Forms />} />
        {/* Class Projects */}
        <Route path="/classProjects/project30" element={<Project30Parent />} />
        <Route path="/classProjects/project31" element={<Project31Form />} />
        <Route path="/classProjects/project32" element={<Project32Parent />} />
        <Route path="/classProjects/project33" element={<Project33State />} />
        <Route path="/classProjects/project34" element={<Project34useEffect />} />
        <Route path="/classProjects/project35" element={<Project35Forms />} />
        <Route path="/classProjects/project36" element={<Project36 />} />
        <Route path="/classProjects/project37" element={<Project37 />} />
        {/* Homework */}
        <Route path="/homeWork/week9" element={<Week9HWFramerMotion />} />
        <Route path="/homeWork/week10" element={<Week10HWPlaceHolder />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
	document.getElementById('root')
);
