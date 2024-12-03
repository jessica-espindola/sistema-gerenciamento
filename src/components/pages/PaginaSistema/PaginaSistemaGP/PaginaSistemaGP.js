import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../PaginaSistemaGP/PaginaSistemaGP.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearIcon from '@mui/icons-material/Clear';
import mockSystems from '../../../../mockData/mockSystem.json';
import mockPermissions from '../../../../mockData/mockPermissions.json';

const SystemDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [system, setSystem] = useState(null);
    const [permissions, setPermissions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [newPermission, setNewPermission] = useState({ name: '', descricao: '' });
    const [permissionToDelete, setPermissionToDelete] = useState(null);

    useEffect(() => {
        const loadSystemDetails = () => {
            const selectedSystem = mockSystems.find((sys) => sys.id === Number(id));
            setSystem(selectedSystem);
        };

        const loadPermissions = () => {
            const systemPermissions = mockPermissions.filter((perm) => perm.sistema === Number(id));
            setPermissions(systemPermissions);
        };

        loadSystemDetails();
        loadPermissions();
    }, [id]);

    const handleAddPermission = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setNewPermission({ name: '', descricao: '' });
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) handleCloseModal();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPermission((prev) => ({ ...prev, [name]: value }));
    };

    const handleSavePermission = (e) => {
        e.preventDefault();
        const newPerm = {
            id: permissions.length + 1,
            name: newPermission.name,
            descricao: newPermission.descricao,
            sistema: Number(id),
        };
        setPermissions((prev) => [...prev, newPerm]);
        handleCloseModal();
    };

    const handleDeletePermission = (permission) => {
        setPermissionToDelete(permission);
        setShowDeleteModal(true);
    };

    const confirmDeletePermission = () => {
        setPermissions((prev) => prev.filter((perm) => perm.id !== permissionToDelete.id));
        setPermissionToDelete(null);
        setShowDeleteModal(false);
    };

    const cancelDeletePermission = () => {
        setPermissionToDelete(null);
        setShowDeleteModal(false);
    };

    if (!system) return <p>Carregando detalhes do sistema...</p>;

    return (
        <div className="background-container">
            <div className="background-components-container">
                <div className="container-tituloSecaoGP">
                    <div className="container-tituloSecaoGP-boxTitulo">
                        <button
                            onClick={() => navigate(`/sistemas/${system.id}`)}
                            className="link-voltar"
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            <ArrowBackIcon className="IconeVoltar" />
                        </button>
                        <h1>{system.name} / Gerenciar Permissões</h1>
                    </div>
                    <button onClick={handleAddPermission} className="adicionar-permissao-btn">
                        Adicionar Permissão
                    </button>
                </div>

                <div className="permissions-list">
                    <h3>Permissões:</h3>
                    <ul>
                        {permissions.length > 0 ? (
                            permissions.map((permission) => (
                                <li key={permission.id}>
                                    <div>
                                        <div className="nomePermissao">{permission.name}</div>
                                        <div className="descricaoPermissao">
                                            {permission.descricao || 'Sem descrição'}
                                        </div>
                                    </div>
                                    <ClearIcon
                                        className="action-icon delete-icon deletar"
                                        onClick={() => handleDeletePermission(permission)}
                                    />
                                </li>
                            ))
                        ) : (
                            <p>Sem permissões atribuídas para este sistema.</p>
                        )}
                    </ul>
                </div>
            </div>

            {/* Modal para Adicionar Permissão */}
            {showModal && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="modal-content">
                        <h2>Adicionar Nova Permissão</h2>
                        <form onSubmit={handleSavePermission}>
                            <label>
                                Nome da Permissão:
                                <input
                                    type="text"
                                    name="name"
                                    value={newPermission.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Descrição:
                                <textarea
                                    name="descricao"
                                    value={newPermission.descricao}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <div className="modal-buttons">
                                <button type="button" onClick={handleCloseModal}>
                                    Cancelar
                                </button>
                                <button type="submit">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal para Confirmar Exclusão */}
            {showDeleteModal && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="modal-content">
                        <h2>Confirmar Exclusão</h2>
                        <p>Deseja realmente remover a permissão "{permissionToDelete?.name}"?</p>
                        <div className="modal-buttons">
                            <button onClick={cancelDeletePermission}>Cancelar</button>
                            <button onClick={confirmDeletePermission}>Excluir</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SystemDetails;
