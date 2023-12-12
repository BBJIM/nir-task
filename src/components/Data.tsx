import styled from "styled-components"
import {reconciliatedData} from "../types/reconciliatedData"
import Row from "./Row"
import React from "react";

const DataWrapper = styled.div`
    margin: 10px;
`

const Data = React.memo(({records}: {records: reconciliatedData[]}) => {
    return <DataWrapper>
        {records?.map(record => {
            return <Row record={record} />
        })}
    </DataWrapper>
});

export default Data;