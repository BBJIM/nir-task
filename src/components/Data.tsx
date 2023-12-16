import styled from "styled-components"
import { reconciliatedData } from "../types/reconciliatedData"
import Row from "./Row"
import React from "react";

const DataWrapper = styled.div`
    margin: 10px;
    display: flex;
    gap: 40px;
`

const Data = React.memo(({ records }: { records: reconciliatedData }) => {
    const recordsKeys = Object.keys(records);
    return <DataWrapper>
        {recordsKeys?.map(key => {
            const data = records[key];
            return (
                <div key={key}>
                    <b>{key}</b>
                    {data.map((record: any) => {
                        return <Row key={record.id} record={record} />
                    })}
                </div>)
        })}

    </DataWrapper>
});

export default Data;