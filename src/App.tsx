import { useEffect } from 'react';
import { getCurrencyIn } from './api/frankfurterApiCalls';
import { currencyType } from './types/types';
import useCurrency from './hooks/useCurrency';

import './App.css';

function App() {
  const [currencyResponse, dispach] = useCurrency();
  useEffect(() => {
    getCurrencyIn(currencyType.EUR)
    .then(response => {
      dispach({
        type: 'show_currency',
        payload: response 
      })
    })
  },[dispach]);
  console.log(currencyResponse)
  return (
    <div className="App">
      <header className="App-header">
        <p>{currencyResponse.amount} {currencyResponse.base} Equivale a {currencyResponse.rates.USD} USD</p> 
      </header>
    </div>
  );
}

export default App;
