import axios from 'axios'
import React, {useState, useEffect} from 'react';

function CurrencyConverter() {

    const [stateData, setStateData] = useState({
        data: {},
        firstCurrency: 'USD',
        secondCurrency: '',
        rate: null
    })

    const { data, firstCurrency, secondCurrency, rate } = stateData;

    //i think its more optimal code than that one below:

    // const [data, setData] = useState({})
    // const [firstCurrency, setFirstCurrency] = useState("USD")
    // const [secondCurrency, setSecondCurrency] = useState(null)
    // const [rate, setRate] = useState(null)

    const url = 'https://currencyscoop.p.rapidapi.com/latest'
    const token = 'f53bbfcd6emsh53cb2a99210ef13p1d0b36jsn617ef6bebbc5'
    const host = 'currencyscoop.p.rapidapi.com'

    useEffect(() => {
        axios({
            method: 'GET',
            url: url,
            headers: {
                'X-RapidAPI-Key': token,
                'X-RapidAPI-Host': host
            }
        })
        .then(
            res => {
                setStateData(prev => ({
                    ...prev,
                    data: res.data.response
                }))
            }
        )
        .catch(
            error => console.log(error)
        )

    })

    const handleSelect = e => {
        const selectedIndex = e.target.options.selectedIndex ;

        setStateData(prev => ({
            ...prev,
            secondCurrency: e.target.value,
            rate: Object.values(data.rates)[e.target.options[selectedIndex].getAttribute('data-key')]
        }))
    }

    return (
        <div>
            <div>
                <div>
                    <select value={secondCurrency}  onChange={handleSelect}>
                        <option value=""></option>
                        {data.rates && Object.keys(data.rates).map((item, id) => (
                            <option
                            key={item}
                            data-key={id}
                            value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    {secondCurrency}<br />
                    {rate}
                </div>
            </div>
        </div>
  );
}

export default CurrencyConverter;
