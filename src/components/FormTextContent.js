import styled from "styled-components";
import FormDate from "./FormDate";

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: .5rem 0 1rem;
    min-height: 70px;

`

const TextWrapper = styled.div`
    word-break:break-word;
    font-family: Arial, Helvetica, sans-serif;

    :nth-child(1){
        color: #a1a1a1;
        font-size: 12px;
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
            { (firstCurrencyValue && firstCurrencyName && secondCurrencyValue && secondCurrencyName) && (
                <>
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
                </>
            )}
            <FormDate
                isoDate={date}
            />
        </ContentWrapper>

    );
}

export default FormTextContent;