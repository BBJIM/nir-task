import styled from "styled-components"
import {reconciliatedData} from "../types/reconciliatedData"

const StyledRow = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    padding: 2px;
    margin-bottom: 10px;
`

const Row = ({record}: {record: reconciliatedData}) => {
    console.log(record);
    return <StyledRow>
        <div>Repository.id: <b>{record.Repository.id}</b></div>
        <div>Repository.name: <b>{record.Repository.name}</b></div>
        <div>Repository.url: <b>{record.Repository.url}</b></div>
        <div>Repository.size: <b>{record.Repository.size}</b></div>
        <div>Image.name: <b>{record.Image.name}</b></div>
        <div>Image.source: <b>{record.Image.source}</b></div>
        <div>Image.url: <b>{record.Image.url}</b></div>
    </StyledRow>
}

export default Row;