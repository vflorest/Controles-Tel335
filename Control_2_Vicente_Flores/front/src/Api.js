import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/';

export const searchFacts = async (query) => {
  try {
    console.log(`Received query: ${query}`); // Log para depurar
    const response = await axios.get(`${BASE_URL}search`, {
      params: { query }
    });
    console.log('API search results:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error in searchFacts:', error);
    throw error;
  }
};
