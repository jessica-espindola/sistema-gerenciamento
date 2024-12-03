import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/pages/common/header/header.js';
import Footer from './components/pages/common/footer/footer.js';
import Configuracoes from './components/pages/Configuracoes';
import AddProfile from './components/pages/CriarPerfil.js';
import HomePage from './components/pages/HomePage.js';
import AdminPainel from './components/pages/AdminPainel.js';
import './App.css';

function App() {
   return (
      <Router>
         <div className="app-container">
            <Header />
            <div className="main-content">
               <Routes>
                  <Route path="/configuracoes" element={<Configuracoes />} />
                  <Route path="/HomePage" element={<HomePage />} />
                  <Route path="/addprofile" element={<AddProfile />} />
                  <Route path="/AdminPainel" element={<AdminPainel />} />
               </Routes>
            </div>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
