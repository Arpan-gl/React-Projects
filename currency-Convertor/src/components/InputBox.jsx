import React,{useId} from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    const ammountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={ammountInputId} className="text-black font-medium mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={ammountInputId}
                    className="outline-none font-medium text-sm w-full bg-transparent py-1.5"
                    type="number"
                    min={0}
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange &&  onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black font-medium mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled={currencyDisabled}
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((Option)=>{
                        return <option key={Option} value={Option}>
                            {Option}
                        </option>
                    })}
                </select>
            </div>
        </div>
    );
}

export default InputBox;