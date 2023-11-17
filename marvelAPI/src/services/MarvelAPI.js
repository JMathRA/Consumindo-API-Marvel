import axios from 'axios'
import md5 from 'md5'

const publicKey = '17304e494dce09544f870a9c79079e02'
const privateKey = '83aab074768de0ef775ef7297b43656b2bbdd976'
const baseURL = 'https://gateway.marvel.com/v1/public'

const ts = Date.now();
const hash = md5(ts + privateKey + publicKey)

const api = axios.create({
  baseURL,
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

const MarvelApi = {
    getCharacters() {
      return api.get('/characters');
    },
    getAllComics() {
      return api.get('/comics');
    },
  };
  
  export default MarvelApi;