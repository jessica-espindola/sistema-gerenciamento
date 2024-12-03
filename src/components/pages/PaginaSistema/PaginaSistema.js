import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../PaginaSistema/PaginaSistema.css';
import mockSystems from '../../../mockData/mockSystem.json'; // Importa o JSON mockado COMENTE QUANDO A API ESTIVER FUNCIONANDO
import mockPermissions from '../../../mockData/mockPermissions.json'; // Importa o JSON mockado COMENTE QUANDO A API ESTIVER FUNCIONANDO
// import { fetchSystem } from '../../../services/systemService.js'; // Descomente quando a API estiver funcionando

const SystemDetails = () => {
    const { id } = useParams(); // Obtém o ID da URL
    const [system, setSystem] = useState(null);
    const [permissions, setPermissions] = useState([]); // Estado para armazenar as permissões

    useEffect(() => {
        const loadSystemDetails = async () => {
          console.log("ID do sistema da URL:", id); // Verifique se o ID está correto
          const selectedSystem = mockSystems.find((sys) => sys.id === Number(id));
          console.log("Sistema selecionado:", selectedSystem);
          setSystem(selectedSystem);
        };
      
        const loadPermissions = async () => {
          console.log("Buscando permissões para o sistema com ID:", id); // Verifique se o ID está correto
          const systemPermissions = mockPermissions.filter((perm) => perm.sistema === Number(id));
          console.log("Permissões carregadas:", systemPermissions);
          setPermissions(systemPermissions);
        };
      
        loadSystemDetails();
        loadPermissions();
      }, [id]);

    if (!system) {
        return <p>Carregando detalhes do sistema...</p>;
    }

    return (
        <div className='background-container'>
            <div className='background-components-container'>
                <div className='container-tituloSecao'>
                    <div className='container-tituloSistema'>
                        <h1>{system.name}</h1>
                    </div>
                    <div className='container-tituloBotao'>
                        <a>Adicionar Permissão</a>
                    </div>
                </div>
                
                {/* Exibe as permissões do sistema */}
                <div className="permissions-list">
                    <h3>Permissões:</h3>
                    <ul>
                        {permissions.length > 0 ? (
                            permissions.map((permission) => (
                                <li key={permission.id}>
                                    {permission.name} - {permission.descricao || 'Sem descrição'}
                                </li>
                            ))
                        ) : (
                            <p>Sem permissões atribuídas para este sistema.</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SystemDetails;
