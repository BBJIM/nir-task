import styled from "styled-components"
import {reconciliatedData} from "../types/reconciliatedData"

const StyledRow = styled.div`
    border-bottom: 1px solid black;
`

const Row = ({record}: {record: reconciliatedData}) => {
    console.log(record);
    return <StyledRow>
        <div>Repository.id: {record.Repository.id}</div>
        <div>Repository.name: {record.Repository.name}</div>
        <div>Repository.url: {record.Repository.url}</div>
        <div>Repository.size: {record.Repository.size}</div>
        <div>Image.name: {record.Image.name}</div>
        <div>Image.source: {record.Image.source}</div>
        <div>Image.url: {record.Image.url}</div>
    </StyledRow>
}

export default Row;