/*DESCOMENTAR QUANDO A API ESTIVER FUNCIONANDO 
import axios from 'axios'; */
// APAGAR QUANDO A API ESTIVER FUNCIONANDO
import usersMock from '../mockData/mockSystem.json';

//CARREGAR A LISTA DE SISTEMAS
// APAGAR QUANDO A API ESTIVER FUNCIONANDO -  Função para buscar todos os sistemas usando o JSON mockado
export const fetchSystem = async () => {
    try {
      // Retorna os dados mockados diretamente
      return usersMock;
    } catch (error) {
      console.error('Erro ao buscar sistemas:', error);
      throw error;
    }
  };
//ADICIONAR NOVO SISTEMA
// APAGAR QUANDO A API ESTIVER FUNCIONANDO - Função para adicionar um novo usuário usando o JSON mockado
export const addSystem = async (userData) => {
    try {
      // Simula a adição do sistema no mock (apenas para teste; sem efeito no JSON real)
      const newUser = { id: usersMock.length + 1, ...userData };
      usersMock.push(newUser); // Adiciona no array local (não persistente)
      return newUser;
    } catch (error) {
      console.error('Erro ao adicionar sistema:', error);
      throw error;
    }
  };

//DELETAR SISTEMA
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
//COLOCANDO O LINK DA API
const api = axios.create({
  baseURL: 'https://sua-api.com', // URL base para todas as requisições
});*/

/* DESCOMENTAR QUANDO A API ESTIVER FUNCIONANDO - Função para buscar todos os sistemas
export const fetchSystem = async () => {
  //CARREGA OS SISTEMAS NA API
  try {
    // Faz uma requisição GET para o endpoint '/users' da API
    const response = await api.get('/users');
    // Retorna os dados dos sistemas obtidos da resposta
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar sistemas:', error);
    // Lança o erro para ser tratado onde a função for chamada
    throw error;
  }
};*/

/* DESCOMENTAR QUANDO A API ESTIVER FUNCIONANDO - Função para adicionar um novo sistema
export const addSystem = async (userData) => {
  try {
    // Faz uma requisição POST para o endpoint de sistemas da API, enviando userData no corpo
    //COLOQUE O ENDPOINT CORRETO
    const response = await api.post('/users', userData);
    // Retorna os dados do novo sistema obtidos da resposta
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar sistema:', error);
    // Lança o erro para ser tratado onde a função for chamada
    throw error;
  }
};*/

/* DESCOMENTAR QUANDO A API ESTIVER FUNCIONANDO - Função para deletar um sistema com base no ID
export const deleteSystem = async (id) => {
  try {
    // Faz uma requisição DELETE para o endpoint do sistema específico com base no ID da API
    //COLOQUE O ENDPOINT CORRETO
    await api.delete(`/users/${id}`);
  } catch (error) {
    console.error('Erro ao deletar sistema:', error);
    // Lança o erro para ser tratado onde a função for chamada
    throw error;
  }
};*/
