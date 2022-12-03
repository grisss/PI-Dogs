const axios = require("axios")
const {Dog, Temperament}= require('../db')
const  {YOUR_API_KEY}=process.env

const getApiInfo = async() => {
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?key=${YOUR_API_KEY}`);
    const apiInfo =apiUrl.data.map(e=>{ 
        return{
            id:e.id,
            name:e.name,
            height:e.height.metric.concat(' cm'), 
            weight:e.weight.metric.concat(' kgs'),
            life_span:e.life_span,
            image:e.image.url,
            temperament:e.temperament
        };
    });
    return apiInfo;
};    

const getDbInfo = async () => {
    return await Dog.findAll({
    include: {
        model: Temperament, 
        attributes: ['name'], 
        through: {
            attributes: [],
        },
    }
    });
};
    const getAllDogs = async () => { 
        const apiInfo = await getApiInfo(); 
        const dbInfo = await getDbInfo();
        const infoTotal = apiInfo.concat(dbInfo);
        return infoTotal; 
};
module.exports= getAllDogs;