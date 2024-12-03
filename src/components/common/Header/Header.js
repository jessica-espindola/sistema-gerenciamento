import React, { useState } from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/images/logo-sistema.png';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    const navigate = useNavigate();
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <>
          <header>
              <div className="container-principal">
                  <div className="container-logo">
                      <a href="/">
                          <img src={logo} alt="Logo" />
                          <div className="container-logoNome">
                              <h1>Sistema de Gerenciamento</h1>
                              <h2>4NTADS 2024.1</h2>
                          </div>
                      </a>
                  </div>
                  <div className="container-homePage-menu">
                      <a onClick={() => navigate('/HomePage')}>
                          <HomeIcon style={{ fontSize: 40, color: '#012066', cursor: 'pointer' }} />
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
                      <div className="container-perfilUsuario">
                        <a onClick={toggleDropdown} className="dropdown-trigger">
                          <AccountCircleIcon style={{ fontSize: 40, color: '#012066', cursor: 'pointer' }} />
                        </a>
                      </div>
                </div>
            </header>
            {dropdownVisible && (
                <div className="dropdown-menu">
                    <a onClick={() => navigate('/perfil')}>Alterar Dados</a>
                    <a onClick={() => navigate('/sair')}>Sair</a>
                </div>
            )}
        </>
    );
}
export default Header;
