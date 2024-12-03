import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../PaginaSistemaGP/PaginaSistemaGP.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import mockSystems from '../../../../mockData/mockSystem.json'; // Mock JSON
import mockPermissions from '../../../../mockData/mockPermissions.json'; // Mock JSON

const SystemDetails = () => {
    const { id } = useParams(); // Obtém o ID da URL
    const navigate = useNavigate(); // Hook para navegação
    const [system, setSystem] = useState(null);
    const [permissions, setPermissions] = useState([]); // Estado para permissões

    useEffect(() => {
        const loadSystemDetails = async () => {
            const selectedSystem = mockSystems.find((sys) => sys.id === Number(id));
            setSystem(selectedSystem);
        };

        const loadPermissions = async () => {
            const systemPermissions = mockPermissions.filter((perm) => perm.sistema === Number(id));
            setPermissions(systemPermissions);
        };

        loadSystemDetails();
        loadPermissions();
    }, [id]);

    if (!system) {
        return <p>Carregando detalhes do sistema...</p>;
    }

    return (
        <div className="background-container">
            <div className="background-components-container">
                <div className="container-tituloSecaoGP">
                    <div className='container-tituloSecaoGP-boxTitulo'>
                        <div>
                            <button 
                                onClick={() => navigate(`/sistemas/${system.id}`)} 
                                className="link-voltar" 
                                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                <ArrowBackIcon className="IconeVoltar" />
                            </button>
                        </div>
                        <div className="container-tituloSistema">
                            <h1>{system.name} / Gerenciar Permissões</h1>
                        </div>
                    </div>
                    <div className="container-tituloBotao">
                        <a href="#">Adicionar Permissão</a>
                    </div>
                </div>
                <div className="container-conteudo">
                    <div className="permissions-list">
                        <h3>Permissões:</h3>
                        <ul>
                            {permissions.length > 0 ? (
                                permissions.map((permission) => (
                                    <li key={permission.id}>
                                        <div className="nomePermissao">{permission.name}</div>
                                        <div className="descricaoPermissao">
                                            {permission.descricao || 'Sem descrição'}
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <p>Sem permissões atribuídas para este sistema.</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemDetails;
