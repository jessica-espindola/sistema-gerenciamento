import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSystem } from '../../../services/systemService.js'; // Reutilize sua função de busca

const SystemDetails = () => {
  const { id } = useParams(); // Obtém o ID da URL
  const [system, setSystem] = useState(null);

  useEffect(() => {
    const loadSystemDetails = async () => {
      try {
        const systems = await fetchSystem(); // Busca a lista completa
        const selectedSystem = systems.find((sys) => sys.id === parseInt(id));
        setSystem(selectedSystem);
      } catch (error) {
        console.error('Erro ao carregar os detalhes do sistema:', error);
      }
    };

    loadSystemDetails();
  }, [id]);

  if (!system) {
    return <p>Carregando detalhes do sistema...</p>;
  }

  return (
    <div>
      <h1>{system.name}</h1>
      <p>{system.description || 'Nenhuma descrição disponível.'}</p>
      {/* Adicione outros detalhes que você deseja exibir */}
    </div>
  );
};

export default SystemDetails;
    