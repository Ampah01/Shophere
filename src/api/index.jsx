import axios from 'axios';

const fetchAmazonProductCategories = async () => {
  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/product-category-list',
    params: { country: 'US' },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY, 
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.data; 
  } catch (error) {
    throw new Error('Failed to fetch categories'); 
  }
};

export { fetchAmazonProductCategories };
