import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo-sistema.png';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';

function Header() {
    const navigate = useNavigate(); 
   return (
      <header>
        <div className='container-principal'>
            <div className='container-logo'>
                <a href='/'>
                    <img src={logo} alt="Logo" />
                    <div className='container-nome'>
                        <h1>Sistema de Gerenciamento</h1>
                        <h2>4NADS 2024.1</h2>
                    </div>
                </a> 
            </div>
        </div>
        <div className='container-homePage-menu'>
        <a onClick={() => navigate('/HomePage')}>
          <HomeIcon style={{ fontSize: 40, color: '#012066', cursor: 'pointer' }}/> 
        </a>
        <a onClick={() => navigate('/addprofile')}>
          <PersonAddIcon style={{ fontSize: 40, color: '#012066', cursor: 'pointer' }} />
        </a>
        <a onClick={() => navigate('/AdminPainel')}>
          <AdminPanelSettingsIcon style={{ fontSize: 40, color: '#012066', cursor: 'pointer' }} />
        </a>
        <a onClick={() => navigate('/configuracoes')}>
          <SettingsIcon style={{ fontSize: 40, color: '#012066', cursor: 'pointer' }} />
        </a>
      </div>
      </header>
   );
}

export default Header;
