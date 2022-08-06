import axios from 'axios'
import React, {useState, useEffect} from 'react';
import FormCard from './components/FormCard';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    justify-content: center;
`

function CurrencyConverter() {

    const [stateData, setStateData] = useState({
        data: {},
        firstCurrency: 'USD',
        value: 0,
        firstCurrency: {
            name: 'USD',
            rate: '1'
        },
        secondCurrency: {
            name: '',
            rate: 0
        },
    })

    const { data, firstCurrency, secondCurrency, value } = stateData;

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

    const handleInput = e => {
        setStateData(prev => ({
            ...prev,
            value: e.target.value
        }))
    }

    const handleSelect = e => {
        const selectedIndex = e.target.options.selectedIndex ;

        setStateData(prev => ({
                ...prev,
            [e.target.name]: {
                name: e.target.value,
                rate: Object.values(data.rates)[e.target.options[selectedIndex].getAttribute('data-key')],
            }
        }))

    }

    return (
        <Wrapper>
            <FormCard
                firstCurrency={firstCurrency.name}
                secondCurrency={secondCurrency.name}
                firstCurrencyValue={value}
                secondCurrencyValue={(value*(secondCurrency.rate / firstCurrency.rate)).toFixed(2)}
                handleInput={handleInput}
                handleSelect={handleSelect}
                data={data.rates}
            />
        </Wrapper>
  );
}

export default CurrencyConverter;
