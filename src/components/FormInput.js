import { useState } from "react";
import styled from "styled-components";

const FormInputWrapper = styled.div`
    padding: 1px;
    border: 2px solid ${(props) => props.isfocused ? '#48a1ff' : '#5f6368'};
    caret-color: #48a1ff;
    color: #999da2;
    display: flex;
    border-radius: 6px;
    margin-bottom: 16px;
    height: 40px;
    overflow: hidden;
`

const StyledInput = styled.input`
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 24px;
    background: #202124;
    color: #bdc1c6;
    padding: 1px 6px 1px 12px;
    width: 70%;
    height: 100%;
    border: none;
    outline: none;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type='number'] {
        -moz-appearance:textfield;
    }

`

const StyledSelect = styled.select`
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    background: #202124;
    color: #bdc1c6;
    padding: 1px 6px 1px 12px;
    width: 30%;
    height: 100%;
    outline: 0;
    border: 1px solid #202124;
`


const FormInput = (props) => {

    const [isFocused, setIsFocused] = useState(false)

    const {
        name,
        type,
        value,
        onchange,
        onselect,
        isnotreadable,
        options,
        valuename
    } = props;

    return (

        <FormInputWrapper
        isfocused={isFocused}
        >
            <StyledInput
                name={name}
                type={type}
                value={value}
                onChange={onchange}
                disabled={isnotreadable}
                readOnly={isnotreadable}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <StyledSelect
                name={name}
                value={valuename}
                onInput={onselect}
                onChange={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
                <option value=""/>
                    {options && Object.keys(options).map((item, id) => (
                        <option
                            key={item}
                            data-key={id}
                            value={item}
                            >
                            {item}
                        </option>
                    ))}
            </StyledSelect>
        </FormInputWrapper>

    );
}

FormInput.defaultProps = {
    isnotreadable: false,
    onselect: null,
}

export default FormInput;