import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../../PaginaSistema/HomeSistemaDetalhado/PaginaSistemaDetalhado.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import mockSystems from '../../../../mockData/mockSystem.json'; // Mock JSON
import mockPermissions from '../../../../mockData/mockPermissions.json'; // Mock JSON

const SystemDetails = () => {
    const { id } = useParams(); // Obtém o ID da URL
    const navigate = useNavigate(); // Hook para navegação
    const [system, setSystem] = useState(null);
    

    useEffect(() => {
        const loadSystemDetails = async () => {
            const selectedSystem = mockSystems.find((sys) => sys.id === Number(id));
            setSystem(selectedSystem);
        };
        loadSystemDetails();
    }, [id]);

    if (!system) {
        return <p>Carregando detalhes do sistema...</p>;
    }

    return (
        <div className="background-container">
            <div className="background-components-container">
                <div className="container-tituloSecao">
                    <div>
                        <button 
                            onClick={() => navigate('/AdminPainel')} 
                            className="link-voltar" 
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            <ArrowBackIcon className="IconeVoltar" />
                        </button>
                    </div>
                    <div className="container-tituloSistema">
                        <h1>{system.name}</h1>
                    </div>
                </div>
                <div className="container-conteudo">
                    <div className='funcionalidade'>
                        <button onClick={() => navigate('/AdminPainel')}>
                        Gerenciar Perfis
                        </button>
                    </div>
                    <div className='funcionalidade'>
                        <button onClick={() => navigate('/AdminPainel')}>
                        Gerenciar Permissões
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemDetails;
