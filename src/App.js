import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Header from './components/pages/common/header.js';
import Footer from './components/pages/common/footer.js';
import Configuracoes from './components/pages/Configuracoes';

function App() {
   return (
      <Router>
        <Header />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;