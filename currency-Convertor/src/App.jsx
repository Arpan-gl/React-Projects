import { useState } from 'react';
import {InputBox} from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);

  const option = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  }

  return (
    <>
      <div 
        className="bg-cover bg-opacity-5 bg-center h-screen w-full flex-wrap flex justify-center items-center bg-no-repeat"
        style={{backgroundImage : `url('https://images.pexels.com/photos/6780789/pexels-photo-6780789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
          <div className='w-full p-10 rounded-lg'>
            <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white bg-opacity-55'>
                <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert();  
                  }}
                >
                  <div className="w-full mb-1">
                    <InputBox
                      label="From"
                      amount={amount}
                      currencyOptions={option}
                      onCurrencyChange={(currency)=>setFromCurrency(currency)} 
                      selectCurrency={fromCurrency}
                      onAmountChange={(value)=>setAmount(value)}
                    />
                    </div>
                      <div className="relative w-full h-0.5">
                        <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                        >
                          swap
                        </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                        <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={option}
                          onCurrencyChange={(currency)=>setToCurrency(currency)} 
                          selectCurrency={toCurrency}
                          amountDisabled={true}
                        />
                      </div>
                      <button type="submit" onClick={convert} className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                      </button>
                </form>
            </div>
          </div>
      </div>
    </>
  )
}

export default App;