import React from 'react';
import {connect} from 'react-redux'

import { getQuote } from './actions'

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    error: state.error
  }
}

function App(props) {
  const fetchQuote = e => {
    e.preventDefault();
    props.getQuote();
  }
  
  return (
    <div className="App">

      <div className="QuoteList">
        {props.quotes.map(quote => {
          <h4 key={quote.url}>Anime: {quote.anime} Character: {quote.character} Quote: {quote.quote}</h4>

        })}
      </div>
  
      <button onClick={fetchQuote}>Fetch Quote!</button>
    </div>
    // {props.error && <p className="error">{props.error}</p>}
  );
}

export default connect(mapStateToProps, {getQuote})(App);
