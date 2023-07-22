const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

async function getCharById  (req , res) {
    let {id} = req.params;
    try {
       let response = await axios(URL + id)
       let {data} = response;
            const character = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            origin: data.origin,
            status: data.status,
            species: data.species,
        };

        character.name
        ? res.status(200).json(character)
        : res.status(404).send('not fount')

    } catch (error) {
        res.status(500)
        .json({message: error.message})
    }
    

    // let {id} = req.params;
    // axios.get(URL + id)
    // .then((result)=> result.data)
    // .then((data)=>{
    //     const character = {
    //         id:data.id,
    //         image:data.image,
    //         name:data.name,
    //         gender:data.gender,
    //         origin:data.origin,
    //         status:data.status,
    //         species:data.species,
    //     };
    
    //     character.name
    //     ? res.status(200).json(character)
    //     : res.status(404).send('not fount')
    // })
    // .catch((error)=>{
    //     res.status(500)
    //     .json({message: error.message})
    // });

};


module.exports = {
    getCharById
};