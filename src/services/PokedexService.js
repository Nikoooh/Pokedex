import axios from 'axios'
const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemon = async searchString => {
  try {
    const request = await axios.get(`${baseUrl}/${searchString}`)
    return request
  } catch (error) {
    return error
  }
}