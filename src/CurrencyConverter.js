import axios from 'axios'
import React, {useState, useEffect} from 'react';
import FormCard from './components/FormCard';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0 4px;
    margin: 0;
`

function CurrencyConverter() {

    const [stateData, setStateData] = useState({
        data: {},
        firstCurrency: {
            value: 1,
            name: 'USD',
            rate: 1
        },
        secondCurrency: {
            value: '',
            name: '',
            rate: 0
        },
    })

    const { data, firstCurrency, secondCurrency} = stateData;

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

        if(e.target.name === "firstCurrency"){
            setStateData(prev => ({
                ...prev,
                firstCurrency: {
                    ...prev.firstCurrency,
                    value: e.target.value
                },
            }))

            if(secondCurrency.name && secondCurrency.rate){
                setStateData(prev => ({
                    ...prev,
                    secondCurrency: {
                        ...prev.secondCurrency,
                        value: (e.target.value*(secondCurrency.rate / firstCurrency.rate)).toFixed(2)
                    }
                }))
            }
        }

        if(e.target.name === "secondCurrency"){
            setStateData(prev => ({
                ...prev,
                secondCurrency: {
                    ...prev.secondCurrency,
                    value: e.target.value
                }
            }))

            if(firstCurrency.name && firstCurrency.rate){
                setStateData(prev => ({
                    ...prev,
                    firstCurrency: {
                        ...prev.firstCurrency,
                        value: (e.target.value*(secondCurrency.rate / firstCurrency.rate)).toFixed(2)
                    }
                }))
            }
        }
    }

    const handleSelect = e => {
        const selectedIndex = e.target.options.selectedIndex ;

        setStateData(prev => ({
            ...prev,
            [e.target.name]: {
                value: '',
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
                firstCurrencyValue={firstCurrency.value}
                secondCurrencyValue={secondCurrency.value}
                handleInput={handleInput}
                handleSelect={handleSelect}
                data={data.rates}
                date={data.date}
            />
        </Wrapper>
  );
}

export default CurrencyConverter;
