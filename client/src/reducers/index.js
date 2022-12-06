const initialState = { 
    dogs : [],
    allDogs: [], 
    detail: [],
    temperament:[],
};

function rootReducer(state= initialState, action){
    switch(action.type) {
        case "GET_DOGS":
        return {
            ...state,
            dogs: action.payload,
            allDogs: action.payload,
        };
        case 'FILTER_BY_TEMPERAMENT':
            const allBreeds = state.dogs
            const temperamentFiltered = action.payload === 'temp'? 
            state.allDogs : allBreeds.filter(el => {
                return el.temperament? el.temperament.includes(action.payload) :
                el.temperaments?.map(ele => ele.name).includes(action.payload) 
                    
            })
            return {
            ...state, 
            dogs: temperamentFiltered
            
        }

        case 'FILTER_CREATED':
            const filterCreated = action.payload === 'Creados' ? 
            state.allDogs.filter(el => el.createdInDb) 
            : state.allDogs.filter( el => !el.createdInDb)
            return {
                ...state, 
                dogs: action.payload === 'Todos'? state.allDogs 
                : filterCreated  
            }
        case 'FILTER_BY_WEIGHT':
            let weightFilter = [...state.dogs];
            weightFilter= weightFilter.sort((a,b)=>{
            if(a.weight<b.weight){
                return action.payload=== "Heavy"? 1:-1
                }
                if(a.weight>b.weight){
                return action.payload=== "Heavy"? -1:-1
                }
                return 0;

                })
                return{
                ...state,
                dogs: action.payload=== "Peso"?state.allDogs: weightFilter
                }
                
        case 'SORT':
        let sortName = action.payload ==="ASCENDENTE"?
        state.allDogs.sort(function(a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
            }
        if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return -1;
            }
            return 0; // si son iguales lo deja como están quiere decir
            }) 
            :state.allDogs.sort(function(a, b) { // si no, ordenalo 'Desc'
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
            }
        if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return 1;
            }
            return 0;
            })
            return {
            ...state,
            dogs: sortName,
            };
        
            case 'SEARCH_NAME':
            return{
                ...state,
                dogs:action.payload
                }
            case 'GET_DETAILS':
                return {
                ...state,
                detail: action.payload
                }
                default:
                return state;

            case 'GET_TEMPERAMENT':
            return{
                ...state,
                temperament:action.payload
            }

            case 'POST_DOG':
            return{
                ...state,
            }
    }
};


export default rootReducer;