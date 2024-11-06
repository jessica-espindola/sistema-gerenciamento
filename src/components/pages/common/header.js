import React from 'react';
import './header.css';
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
        <nav>
            <a href="/">Home</a>
            <a href="/about">Sobre</a>
        </nav>
        <div className='container-homePage-menu'>
        <a><HomeIcon style={{ fontSize: 40, color: '#012066' }}/> </a>
        <a>
          <PersonAddIcon style={{ fontSize: 40, color: '#012066' }} />
        </a>
        <a>
          <AdminPanelSettingsIcon style={{ fontSize: 40, color: '#012066' }} />
        </a>
        <a onClick={() => navigate('/configuracoes')}>
          <SettingsIcon style={{ fontSize: 40, color: '#012066', cursor: 'pointer' }} />
        </a>
      </div>
      </header>
   );
}

export default Header;
