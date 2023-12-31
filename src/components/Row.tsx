import styled from "styled-components"

const StyledRow = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    padding: 2px;
    margin-bottom: 10px;
`

const Row = ({ record }: { record: object }) => {
    return (
        <StyledRow>
            {Object.keys(record).map((key) => {
                return <div key={key}>{key} <b>{record[key]}</b></div>
            })}
        </StyledRow>
    );
}

export default Row;