import axios from 'axios';

const searchImages=async(term)=>{
    const response=await axios.get('https://api.unsplash.com/search/photos',
    {headers:{
      Authorization:'Client-ID a-4oYQ6iRwLwETIoVVbuCuazxdGj3fuLq8n_a7-l0Qw'
    },
    params:{
      query:term
    }
  })
  return response.data.results;
  };

  export default searchImages;