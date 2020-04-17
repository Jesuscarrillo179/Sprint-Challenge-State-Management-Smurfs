const initialState = {
    smurfs: []
}

const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_SMURF':
            return {
                ...state,
                smurfs:action.payload
            }
        case 'SET_SMURF':
            return{
                ...state,
                smurfs:action.payload
            }
        default:
            return state
    }
}

export default smurfReducer