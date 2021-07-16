import {
    FETCH_QUOTE_START,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAILURE
} from '../actions'

const initialState = {
    quote: [],
    error: '',
    ifFetching: false
}

function reducer(state = initialState, action) {
    console.log('reducer:', action);
    switch (action.type) {
        case FETCH_QUOTE_START:
            return{
                ...state,
                error: '',
                isFetching: true
            }
        case FETCH_QUOTE_SUCCESS:
            return {
                ...state,
                quote: action.payload,
                error: '',
                isFetching: false,
            }
        case FETCH_QUOTE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    
    }
}

export default reducer