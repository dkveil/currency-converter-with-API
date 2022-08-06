import styled from 'styled-components'
import FormInput from './FormInput'
import FormTextContent from './FormTextContent'

const FormCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    background: #202124;
    color: white;
    font-weight: 300;
    padding: 1rem 2rem;
    border: 1px solid #212121;
    border-radius: .5rem;
    box-shadow: .1rem .1rem 0 #212121;
    max-width: calc(100% - 6px);

`

const FormTitle = styled.h2`
    text-align: center;
    font-size: .8rem;
    font-family: Arial, Helvetica, sans-serif;
`

const FormCard = (props) => {

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
    <FormCardWrapper>
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