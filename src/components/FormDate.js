import { convertMonth } from "../utils/dateUtils";
import styled from "styled-components";

const DateWrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #a1a1a1;

`

const FormDate = (props) => {

    const { isoDate } = props;

    const date = new Date(isoDate)

    const day = String(date.getDate()).padStart(2, 0)
    const month = convertMonth(date.getMonth()+1)
    const hour = String(date.getUTCHours()).padStart(2, 0)
    const minutes = String(date.getUTCMinutes()).padStart(2, 0)

    if(isoDate){
        return (
            <DateWrapper>
                <span>{month} {day}, {hour}:{minutes} UTC</span>
            </DateWrapper>
        );
    }

}

export default FormDate;
<>
</>