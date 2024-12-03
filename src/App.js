import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/common/Header/Header.js';
import Footer from './components/common/Footer/Footer.js';
import Configuracoes from './components/pages/Configuracoes/Configuracoes';
import AddProfile from './components/pages/CriarPerfil/CriarPerfil.js';
import HomePage from './components/pages/HomePage/HomePage.js';
import AdminPainel from './components/pages/AdminPainel/AdminPainel.js';
import DetalheSistema from './components/pages/PaginaSistema/HomeSistemaDetalhado/PaginaSistemaDetalhado.js';
import GerenciarPermissoes from './components/pages/PaginaSistema/PaginaSistemaGP/PaginaSistemaGP.js';



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
                  <Route path="/sistemas/:id" element={<DetalheSistema />} />
                  <Route path="/sistemas/:id/gerenciar-permissoes" element={<GerenciarPermissoes />} />
               </Routes>
            </div>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
