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
import Week9_01_FirstComponent from './classMaterial/week9/Week9_01_FirstComponent';
import Week9_02_Parent from './classMaterial/week9/Week9_02_Parent';
import Week9_03_Form from './classMaterial/week9/Week9_03_Form';
import Week10_01_PropsParent from './classMaterial/week10/Week10_01_PropsParent';
import Week10_02_useState from './classMaterial/week10/Week10_02_useState';
import Week10_03_useEffect from './classMaterial/week10/Week10_03_useEffect';
import Week10_04_EventsP from './classMaterial/week10/Week10_04_EventsP';
import Week10_05_Forms from './classMaterial/week10/Week10_05_Forms';
// Class Projects
import Project30_Parent from './classProjects/Project30/Project30_Parent';
import Project31_Form from './classProjects/Project31/Project31_Form';
import Project32_Parent from './classProjects/Project32/Project32_Parent';
import Project33_State from './classProjects/Project33/Project33_State';
import Project34_useEffect from './classProjects/Project34/Project34_useEffect';
import Project35_Forms from './classProjects/Project35/Project35_Forms';
import Project36 from './classProjects/Project36/Project36';
import Project37 from './classProjects/Project37/Project37';
// Homework
import Week9_HW_FramerMotion from './homeWork/week9/Week9_HW_FramerMotion';
import Week10_HW_PlaceHolder from './homeWork/week10/Week10_HW_PlaceHolder';

ReactDOM.render(
	// prettier-ignore
	<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Class Material */}
        <Route path="/classMaterial/week9_01" element={<Week9_01_FirstComponent />} />
        <Route path="/classMaterial/week9_02" element={<Week9_02_Parent />} />
        <Route path="/classMaterial/week9_03" element={<Week9_03_Form />} />
        <Route path="/classMaterial/week10_01" element={<Week10_01_PropsParent />} />
        <Route path="/classMaterial/week10_02" element={<Week10_02_useState />} />
        <Route path="/classMaterial/week10_03" element={<Week10_03_useEffect />} />
        <Route path="/classMaterial/week10_04" element={<Week10_04_EventsP />} />
        <Route path="/classMaterial/week10_05" element={<Week10_05_Forms />} />
        {/* Class Projects */}
        <Route path="/classProjects/project30" element={<Project30_Parent />} />
        <Route path="/classProjects/project31" element={<Project31_Form />} />
        <Route path="/classProjects/project32" element={<Project32_Parent />} />
        <Route path="/classProjects/project33" element={<Project33_State />} />
        <Route path="/classProjects/project34" element={<Project34_useEffect />} />
        <Route path="/classProjects/project35" element={<Project35_Forms />} />
        <Route path="/classProjects/project36" element={<Project36 />} />
        <Route path="/classProjects/project37" element={<Project37 />} />
        {/* Homework */}
        <Route path="/homeWork/week9" element={<Week9_HW_FramerMotion />} />
        <Route path="/homeWork/week10" element={<Week10_HW_PlaceHolder />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
	document.getElementById('root')
);
