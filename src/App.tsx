import { useEffect } from 'react';
import { getCurrencyIn } from './api/frankfurterApiCalls';
import { apiResponse, currencyType } from './types/types';
import useCurrency from './hooks/useCurrency';
import ShowCurrency from './components/ShowCurrency';

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
  return (
    <div className="App">
      <header className="App-header">
        <ShowCurrency data={currencyResponse}/>
      </header>
    </div>
  );
}

export default App;
