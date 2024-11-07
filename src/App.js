import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/pages/common/header.js';
import Footer from './components/pages/common/footer.js';
import Configuracoes from './components/pages/Configuracoes';
import AddProfile from './components/pages/CriarPerfil.js';
import HomePage from './components/pages/HomePage.js';
import AdminPainel from './components/pages/AdminPainel.js';

function App() {
   return (
      <Router>
        <Header />
         <Routes>
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/addprofile" element={<AddProfile />} />
            <Route path="/AdminPainel" element ={<AdminPainel />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;