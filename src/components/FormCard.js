import styled from 'styled-components'
import FormInput from './FormInput'

const FormCardWrapper = styled.div`
    margin-top: 2rem;
    background: #202124;
    width: 100vh;
    height: 40vh;
    color: white;
    font-weight: 300;
    padding: 0 2rem;
    border: 1px solid #212121;
    border-radius: .5rem;
    box-shadow: .1rem .1rem 0 #212121;

    input{
        color: green;
    }
`

const FormTitle = styled.h2`
    text-align: center;
`

const FormCard = (props) => {

    const {
        firstCurrency,
        firstCurrencyValue,
        secondCurrency,
        secondCurrencyValue,
        handleInput,
        handleSelect,
        data
    } = props;

    return (
    <FormCardWrapper>
        <FormTitle>Currency Converter</FormTitle>
            <select value={secondCurrency}  onChange={handleSelect}>
                <option value=""/>
                    {data && Object.keys(data).map((item, id) => (
                        <option
                        key={item}
                        data-key={id}
                        value={item}>
                        {item}
                        </option>
                    ))}
                </select>
            <FormInput
                name="firstCurrencyValue"
                type="number"
                value={firstCurrencyValue}
                valuename={firstCurrency}
                onchange={handleInput}
                onselect={handleSelect}
                options={data}
                />
            <FormInput
                name="secondCurrencyValue"
                type="number"
                value={secondCurrencyValue}
                valuename={secondCurrency}
                onselect={handleSelect}
                isnotreadable={true}
                options={data}
            />
    </FormCardWrapper> );
}

export default FormCard;