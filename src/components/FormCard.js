import styled from 'styled-components'
import FormInput from './FormInput'
import FormTextContent from './FormTextContent'
import { useState } from 'react'

const FormCardWrapper = styled.div`
    margin-top: 2rem;
    background: #202124;
    color: white;
    font-weight: 300;
    padding: 1rem 2rem;
    border: 1px solid ;
    border-radius: .5rem;
    max-width: calc(100% - 6px);
    margin: auto;
    border: 2px solid ${(props) => props.isfocused ? "#48a1ff" : "#5f6368"};

    @media (min-width: 768px){
        margin-top: 10rem;
        width: 380px;
    }

`

const FormTitle = styled.h2`
    text-align: center;
    font-size: .8rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #c2c2c2;
    font-weight: 300;
`

const FormCard = (props) => {

    const [isFocused, setIsFocused] = useState(false)

    const {
        firstCurrency,
        firstCurrencyValue,
        secondCurrency,
        secondCurrencyValue,
        handleInput,
        handleSelect,
        data,
        date
    } = props;

    return (
    <FormCardWrapper
        isfocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
    >
        <FormTitle>Currency Converter</FormTitle>

        <FormTextContent
            firstCurrencyValue={firstCurrencyValue}
            firstCurrencyName={firstCurrency}
            secondCurrencyValue={secondCurrencyValue}
            secondCurrencyName={secondCurrency}
            date={date}
        />

        <FormInput
            name="firstCurrency"
            type="number"
            value={firstCurrencyValue}
            valuename={firstCurrency}
            onchange={handleInput}
            onselect={handleSelect}
            options={data}
        />
        <FormInput
            name="secondCurrency"
            type="number"
            value={secondCurrencyValue}
            valuename={secondCurrency}
            onchange={handleInput}
            onselect={handleSelect}
            options={data}
        />
    </FormCardWrapper> );
}

export default FormCard;