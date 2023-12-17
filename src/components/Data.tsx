import styled from "styled-components"
import {Records} from "../types/reconciliatedData"
import Row from "./Row"
import React from "react";

const DataWrapper = styled.div`
    margin: 10px;
    display: flex;
    gap: 40px;
`

const Data = React.memo(({records}: {records: Records}) => {
    return <DataWrapper>
        {records.map((record: any) => {
            return <Row key={record.id} record={record} />
        })}
    </DataWrapper>
});

export default Data;