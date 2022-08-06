import styled from "styled-components";

const ContentWrapper = styled.div`
    padding: .5rem 0 1rem;
    min-height: 50px;

`

const TextWrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;

    :nth-child(1){
        color: #a1a1a1;
        font-size: 14px;
    }

    :nth-child(2){
        padding: .2rem 0;
        color: white;
        font-size: 32px;
    }
`

const FormTextContent = (props) => {

    const {
        firstCurrencyValue,
        firstCurrencyName,
        secondCurrencyValue,
        secondCurrencyName,
        date
    } = props

    return (
        <ContentWrapper>
            <TextWrapper>
                <span>
                    {firstCurrencyValue} {firstCurrencyName} equals
                </span>
            </TextWrapper>
            <TextWrapper>
                <span>
                    {secondCurrencyValue} {secondCurrencyName}
                </span>
            </TextWrapper>
            {date}
        </ContentWrapper>

    );
}

export default FormTextContent;