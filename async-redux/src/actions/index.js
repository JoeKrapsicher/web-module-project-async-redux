import axios from 'axios'

export const FETCH_QUOTE_START = "FETCH_QUOTE_START";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS"
export const FETCH_QUOTE_FAILURE = "FETCH_QUOTE_FAILURE"

export const getQuote = (dispatch) => {
    dispatch({ type: FETCH_QUOTE_START});
    axios.get('https://animechan.vercel.app/api/quotes')
    .then(res =>{
        dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data.quotes})
    })
    .catch(err => {
        console.log('err', err.response);
        dispatch({
            type: FETCH_QUOTE_FAILURE,
            payload: `${err.response.status} ${err.response.data}`
        })
    })
}