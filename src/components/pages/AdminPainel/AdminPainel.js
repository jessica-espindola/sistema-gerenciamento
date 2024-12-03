// src/components/SystemList.js
import React, { useEffect, useState } from 'react';
import { addSystem, deleteSystem, fetchSystem } from '../../../services/systemService.js'; // Importa a função de busca e de deletar mockado
import '../../pages/AdminPainel/AdminPainel.css';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // useNavigate em vez de useHistory

const SystemList = () => {
  const [systems, setSystems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSystemName, setNewSystemName] = useState(''); // Para capturar o nome do novo sistema
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [systemToDelete, setSystemToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [systemToEdit, setSystemToEdit] = useState(null);
  const [editedSystemName, setEditedSystemName] = useState('');
  const navigate = useNavigate(); // Navegação para a nova rota

  useEffect(() => {
    const loadSystems = async () => {
      try {
        const data = await fetchSystem();
        setSystems(data); // Carrega os sistemas ao iniciar
      } catch (error) {
        console.error('Erro ao carregar sistemas:', error);
      }
    };

    loadSystems();
  }, []);

  const openModal = (system) => {
    setSystemToDelete(system);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSystemToDelete(null);
  };

  const handleDelete = async () => {
    if (systemToDelete) {
      await deleteSystem(systemToDelete.id); // Exclui o sistema (mockado ou real)
      setSystems((prevSystems) => prevSystems.filter((system) => system.id !== systemToDelete.id)); // Atualiza o estado após exclusão
    }
    closeModal();
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
    setNewSystemName('');
  };

  const handleCreateSystem = async () => {
    if (newSystemName.trim() === '') {
      alert('Por favor, insira um nome para o sistema.');
      return;
    }

    // Verifica se já existe um sistema com o mesmo nome
    const systemExists = systems.some(system => system.name.toLowerCase() === newSystemName.toLowerCase());
  
    if (systemExists) {
      alert('Já existe um sistema com esse nome. Escolha outro nome.');
      return;
    }

    // Gerar um ID único usando Date.now() (ou qualquer outra lógica de geração única)
    const newSystem = { 
      id: Date.now(), // Usando o timestamp atual como ID único
      name: newSystemName, 
      description: '' 
    };

    await addSystem(newSystem); // Adiciona o sistema (mockado ou real)

    // Atualiza o estado após adicionar o novo sistema de forma imutável
    setSystems((prevSystems) => [...prevSystems, newSystem]);

    closeCreateModal();
  };

  const openEditModal = (system) => {
    setSystemToEdit(system);
    setEditedSystemName(system.name);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSystemToEdit(null);
    setEditedSystemName('');
  };

  const handleEditSystem = async () => {
    if (editedSystemName.trim() === '') {
      alert('Por favor, insira um nome para o sistema.');
      return;
    }

    const updatedSystem = { ...systemToEdit, name: editedSystemName };

    // Atualiza o sistema (mockado ou real)
    await addSystem(updatedSystem);

    // Atualiza o estado após editar o sistema de forma imutável
    setSystems((prevSystems) =>
      prevSystems.map((system) =>
        system.id === updatedSystem.id ? updatedSystem : system
      )
    );

    closeEditModal();
  };

  const handleNavigate = () => {
    // Navegar para a página de Gerenciamento de Permissões
    navigate('/gerenciar-permissoes');
  };

  return (
    <div className="background-container">
      <div className="background-components-container">
        <div className="components-buttons">
          <a onClick={openCreateModal}>Criar Novo Sistema</a>
        </div>
        <div className="components-systemList">
          <ul>
            {systems.map((system) => (
              <li key={system.id} className="components-systemList-item">
                <div className="components-systemList-item-info">
                  <a onClick={() => navigate(`/sistemas/${system.id}`)}>
                    <h3>{system.name}</h3>
                    <p>{system.description}</p>
                  </a>
                  
                </div>
                <div className="components-systemList-item-actions">
                  <ClearIcon className="action-icon delete-icon" onClick={() => openModal(system)} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal de Confirmação de Exclusão */}
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box className="modal-box">
          <h2>Você tem certeza que deseja excluir o sistema "{systemToDelete?.name}"?</h2>
          <div>
            <Button variant="outlined" color="primary" onClick={closeModal}>Cancelar</Button>
            <Button variant="contained" color="error" onClick={handleDelete}>Excluir</Button>
          </div>
        </Box>
      </Modal>

      {/* Modal para Criação de Novo Sistema */}
      <Modal open={isCreateModalOpen} onClose={closeCreateModal}>
        <Box className="modal-box-createSystem">
          <h2>Criar Novo Sistema</h2>
          <input
            type="text"
            value={newSystemName}
            onChange={(e) => setNewSystemName(e.target.value)}
            placeholder="Digite aqui o nome para seu novo sistema"
          />
          <div className='modal-box-createSystem-Buttons'>
            <Button variant="outlined" color="primary" onClick={closeCreateModal}>Cancelar</Button>
            <Button variant="contained" color="primary" onClick={handleCreateSystem}>Criar</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SystemList;


