const {Router}= require("express");
const getAllDogs= require('../controllers/index')
const {Dog, Temperament}= require("../db");

const router= Router()
router.get('/', async (req, res) => {
    const name = req.query.name 
    let dogsTotal = await getAllDogs();
    if(name){                              
    let dogsName = await dogsTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
    dogsName.length ?
    res.status(200).send(dogsName) :
    res.status(404).send('dog not found ')
    } else { 
        res.status(200).send(dogsTotal)
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const dogsTotal = await getAllDogs()
    if (id) {
        let dogId = await dogsTotal.filter(el => el.id == id) 
        dogId.length?
        res.status(200).json(dogId):
        res.status(404).send('That id was not found ')
    }
})

router.post('/', async (req, res) => {
    let {
        name, 
        image, 
        heightMin,
        heightMax,  
        weightMin,
        weightMax, 
        life_span, 
        createdInDb, 
        temperament 
        } = req.body;

    let dogCreated = await Dog.create ({
        name, 
        image, 
        heightMin,
        heightMax,  
        weightMin,
        weightMax, 
        life_span, 
        createdInDb, 
    })  
    let temperamentDb = await Temperament.findAll({ 
        where : {name : temperament}                
    })
    dogCreated.addTemperament(temperamentDb) 
    res.send('Dog created ')
});


module.exports = router;