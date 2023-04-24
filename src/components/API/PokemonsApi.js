import axios from "axios";

export const Pokemons = (url = 'https://pokeapi.co/api/v2/pokemon') => {
    return new Promise(async (resolve, reject) => {
        await axios.get(url)
            .then(async (response) => {
                const pokemonsData = response.data.results
                const data = response.data
                const pokemonsArray = []
                for (const pokemon of pokemonsData) {
                    const pokemonUrl = pokemon.url
                    await axios.get(pokemonUrl)
                        .then((response) => {
                            let pokemon = response.data
                            const pokemoninfo = {
                                id: pokemon.id,
                                name: pokemon.name,
                                images: pokemon.sprites,
                                types: pokemon.types,
                                stats: pokemon.stats
                            }
                            pokemonsArray.push(pokemoninfo)
                        })
                        .catch((err) => { throw err })
                }
                resolve({pokemonsArray,data})
            }).catch((err) => {
                reject(err);
            })
    })
}