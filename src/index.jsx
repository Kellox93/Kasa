import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/index';
import FicheLogement from './pages/Fiche_Logement';
import APropos from './pages/A_propos'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer.jsx'
import './GlobalStyle.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route  path='/logement/:id' element={<FicheLogement />}/>
          <Route path='/a-propos' element={<APropos/>}/>
          <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

