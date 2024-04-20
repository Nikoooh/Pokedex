import { getPokemon } from '../services/PokedexService'

export const handleSearch = async (setComparePokemon, searchStr, setSearch) => {

  setSearch(true)
  const request = await getPokemon(searchStr)

  if (request.status === 200) {
      setComparePokemon(request.data)
      setSearch(false)
  } else {
    setSearch(false)
  }
     
}