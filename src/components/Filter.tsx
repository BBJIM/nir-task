import styled from "styled-components"
import {reconciliatedData} from "../types/reconciliatedData"

const Button = styled.button``

const Filter = ({setFilter}: {setFilter: React.Dispatch<React.SetStateAction<reconciliatedData[] | undefined>>}) => {
    return <Button>hello</Button>
}

export default Filter;