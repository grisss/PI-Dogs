import axios from 'axios';

export function getDogs(){
    return async function(dispatch) {
        var json = await axios.get(`http://localhost:3001/dogs`);
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        })
    }
}

export function filterCreated(payload){
    return {
        type: 'FILTER_CREATED',
        payload
    }

}

export function filterByWeight(payload){
    return{
        type:'FILTER_BY_WEIGHT',
        payload
    }
}

export function Sort(payload){
    return{
        type:'SORT',
        payload
    }
}

export function searchDog(name){
    return async function(dispatch){
        try{
            const url= await axios.get(`http://localhost:3001/dogs?name=${name}`);
            return dispatch({
                type:'SEARCH_NAME',
                payload: url.data
            })
        } catch(error){
            alert("Sin coincidencias")
        }
    }
}

export function filterDogsByTemperament(payload){
    return{
        type:'FILTER_BY_TEMPERAMENT',
        payload
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterTemperament(){
    return async function(dispatch) {
        var json = await axios.get(`http://localhost:3001/temperaments`);
        return dispatch({
            type: 'GET_TEMPERAMENT',
            payload: json.data
        })
    }
}

export function postDog(payload){
    return async function(){
        const apiInfo= await axios.post('http://localhost:3001/dogs',payload);
        return apiInfo
    }
}

