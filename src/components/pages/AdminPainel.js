import React, { useState } from 'react';
import './adminPainel.css';

function AdminPainel() {
  // Estado para as permissões disponíveis e selecionadas
  const [availablePermissions, setAvailablePermissions] = useState([
    'Permissão 1',
    'Permissão 2',
    'Permissão 3',
    'Permissão 4',
    'Permissão 5',
  ]);
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [highlightedPermission, setHighlightedPermission] = useState(null); // Estado para a permissão destacada

  // Função para destacar a permissão ao clicar
  const handleHighlightPermission = (permission) => {
    setHighlightedPermission(permission);
  };

  // Função para adicionar uma permissão à lista de selecionadas
  const addPermission = () => {
    if (highlightedPermission && !selectedPermissions.includes(highlightedPermission)) {
      setAvailablePermissions(availablePermissions.filter(p => p !== highlightedPermission)); // Remove da lista disponível
      setSelectedPermissions([...selectedPermissions, highlightedPermission]); // Adiciona na lista selecionada
      setHighlightedPermission(null); // Limpa a permissão destacada após adicionar
    }
  };

  // Função para remover uma permissão da lista de selecionadas
  const removePermission = () => {
    if (highlightedPermission && selectedPermissions.includes(highlightedPermission)) {
      setSelectedPermissions(selectedPermissions.filter(p => p !== highlightedPermission)); // Remove da lista selecionada
      setAvailablePermissions([...availablePermissions, highlightedPermission]); // Adiciona de volta à lista disponível
      setHighlightedPermission(null); // Limpa a permissão destacada após remover
    }
  };

  return (
    <div className="create-system-content">
      <div className="create-system-content-elements">
        <h1>Criar Novo Sistema</h1>

        <p>Nome do Sistema</p>
        <input type="text" />

        <div className="permissions-container">
          {/* Lista de permissões disponíveis (lado esquerdo) */}
          <div className="available-permissions">
            <h3>Permissões Disponíveis</h3>
            <ul>
              {availablePermissions.map((permission, index) => (
                <li
                  key={index}
                  onClick={() => handleHighlightPermission(permission)}
                  className={highlightedPermission === permission ? 'highlighted' : ''}
                >
                  {permission}
                </li>
              ))}
            </ul>
          </div>

          {/* Botões para adicionar/remover permissões (no meio) */}
          <div className="buttons-container">
            <button onClick={addPermission}>Adicionar Permissão</button>
            <button onClick={removePermission}>Remover Permissão</button>
          </div>

          {/* Lista de permissões selecionadas (lado direito) */}
          <div className="selected-permissions">
            <h3>Permissões Selecionadas</h3>
            <ul>
              {selectedPermissions.map((permission, index) => (
                <li
                  key={index}
                  onClick={() => handleHighlightPermission(permission)}
                  className={highlightedPermission === permission ? 'highlighted' : ''}
                >
                  {permission}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPainel;
