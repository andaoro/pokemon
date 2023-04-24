import axios from "axios"

export const Pokemon = (name) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    return new Promise(async(resolve,reject)=>{
       await axios.get(url)
       .then((response)=>{
            resolve(response.data)
       }).catch((err)=>{
        reject(err)
       })
    })
}