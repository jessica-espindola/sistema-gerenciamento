/*DESCOMENTAR QUANDO A API ESTIVER FUNCIONANDO 
import axios from 'axios'; */
import usersMock from '../mockData/mockUsers.json';

// APAGAR QUANDO A API ESTIVER FUNCIONANDO -  Função para buscar todos os usuários usando o JSON mockado
export const fetchSystem = async () => {
    try {
      // Retorna os dados mockados diretamente
      return usersMock;
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      throw error;
    }
  };

// APAGAR QUANDO A API ESTIVER FUNCIONANDO - Função para adicionar um novo usuário usando o JSON mockado
export const addSystem = async (userData) => {
    try {
      // Simula a adição do usuário no mock (apenas para teste; sem efeito no JSON real)
      const newUser = { id: usersMock.length + 1, ...userData };
      usersMock.push(newUser); // Adiciona no array local (não persistente)
      return newUser;
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
      throw error;
    }
  };
// APAGAR QUANDO A API ESTIVER FUNCIONANDO - Função para deletar um usuário usando o JSON mockado
export const deleteSystem = async (id) => {
    try {
      // Filtra os usuários para simular a remoção (não altera o JSON real)
      const updatedUsers = usersMock.filter((user) => user.id !== id);
      console.log('Usuários após deletar:', updatedUsers);
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      throw error;
    }
  };
/* DESCOMENTAR QUANDO A API ESTIVER FUNCIONANDO -  Configura a URL base da API, substitua pela URL da sua API real.
const api = axios.create({
  baseURL: 'https://sua-api.com', // URL base para todas as requisições
});*/

/* DESCOMENTAR QUANDO A API ESTIVER FUNCIONANDO - Função para buscar todos os usuários
export const fetchSystem = async () => {
  try {
    // Faz uma requisição GET para o endpoint '/users' da API
    const response = await api.get('/users');
    // Retorna os dados dos usuários obtidos da resposta
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    // Lança o erro para ser tratado onde a função for chamada
    throw error;
  }
};*/

/* DESCOMENTAR QUANDO A API ESTIVER FUNCIONANDO - Função para adicionar um novo usuário
export const addSystem = async (userData) => {
  try {
    // Faz uma requisição POST para o endpoint '/users' da API, enviando userData no corpo
    const response = await api.post('/users', userData);
    // Retorna os dados do novo usuário obtidos da resposta
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar usuário:', error);
    // Lança o erro para ser tratado onde a função for chamada
    throw error;
  }
};*/

/* DESCOMENTAR QUANDO A API ESTIVER FUNCIONANDO - Função para deletar um usuário com base no ID
export const deleteSystem = async (id) => {
  try {
    // Faz uma requisição DELETE para o endpoint '/users/{id}' da API
    await api.delete(`/users/${id}`);
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    // Lança o erro para ser tratado onde a função for chamada
    throw error;
  }
};*/
