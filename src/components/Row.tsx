import styled from "styled-components"
import {reconciliatedData} from "../types/reconciliatedData"

const StyledRow = styled.div``

const Row = ({record}: {record: reconciliatedData}) => {
    console.log(record);
    return <StyledRow>hello</StyledRow>
}

export default Row;