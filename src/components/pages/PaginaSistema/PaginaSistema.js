import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../PaginaSistema/PaginaSistema.css';
import mockSystems from '../../../mockData/mockSystem.json'; // Importa o JSON mockado COMENTE QUANDO A API ESTIVER FUNCIONANDO
// import { fetchSystem } from '../../../services/systemService.js'; // Descomente quando a API estiver funcionando

const SystemDetails = () => {
    const { id } = useParams(); // Obtém o ID da URL
    const [system, setSystem] = useState(null);
  
    useEffect(() => {
      const loadSystemDetails = async () => {
        // Mockado: Buscar sistema específico do arquivo JSON
        const selectedSystem = mockSystems.find((sys) => sys.id === Number(id)); 
        setSystem(selectedSystem);
  
        // INSTRUÇÕES PARA USAR COM A API:
        /*
        try {
          const systems = await fetchSystem(); // Busca a lista completa via API
          const selectedSystem = systems.find((sys) => sys.id === parseInt(id)); 
          setSystem(selectedSystem);
        } catch (error) {
          console.error('Erro ao carregar os detalhes do sistema:', error);
        }
        */
      };
  
      loadSystemDetails();
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
            
            
        </div>
      </div>
    );
  };
  
  export default SystemDetails;