const { Router } = require('express');
const { Temperament } = require('../db')
const axios = require('axios');
const  {YOUR_API_KEY}=process.env

const router = Router();
const getAllTemperaments = async (req, res) => {
    const temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?key=${YOUR_API_KEY}`);
    const temperaments = temperamentsApi.data.map(el => el.temperament); 
    let dataTemperament = temperaments.join().split(',')

    dataTemperament.forEach (el => {
        let i= el.trim()
            Temperament.findOrCreate({
                where: { name: i }    
        })
    }
    );
    const allTemperaments = await Temperament.findAll();
    res.status(200).json(allTemperaments)
}
router.get('/', getAllTemperaments);
module.exports = router;