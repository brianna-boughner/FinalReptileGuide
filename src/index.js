import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Navbar from './components/Navbar/Navbar';
import CareGuide from './components/CareGuide/CareGuide';
import Quiz from './components/Quiz/Quiz';
import Results from './components/Quiz/Results';
import Contact from './components/Contact/Contact';
import './index.css';
import ScrollPageLizard from './components/ScrollPage/ScrollPageLizard';
import ScrollPageFrog from './components/ScrollPage/ScrollPageFrog';
import ScrollPageTurtle from './components/ScrollPage/ScrollPageTurtle';
import ScrollPageSnake from './components/ScrollPage/ScrollPageSnake';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Saved from './components/Saved/Saved';
import './i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/lizards" element={<ScrollPageLizard/>}/>
        <Route path="/frogs" element={<ScrollPageFrog/>}/>
        <Route path="/turtles" element={<ScrollPageTurtle/>}/>
        <Route path="/snakes" element={<ScrollPageSnake/>}/>
        <Route path="/saved" element={<Saved/>}/>
        <Route exact path="/guide/:id" element ={<CareGuide/>} />
        <Route exact path ="results/:id" element={<Results/>}/>
        <Route path="*" element={<NotFoundPage/>} />
      
      </Routes>
      
    </BrowserRouter>
);
