import {useEffect, useState, useMemo} from 'react'
import {reconciliatedData} from './types/reconciliatedData';
import {fetchData} from './api/fetchData';
import styled from 'styled-components';
import Filter from './components/Filter';
import Data from './components/Data';
import {filterData} from './utils/filterData';

const Wrapper = styled.div`
    margin: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #4813bc;
    padding: 5px;
    border-radius: 5px;
`

function App() {
  const [data, setData] = useState<reconciliatedData[]>();
  const [filter, setFilter] = useState<string>(); // TODO: maybe an object with {filter, resourceType}
  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
    });
  }, []);

  const filtered = useMemo(() => {
    return filterData(data, filter);
  }, [data, filter])

  return (
    <Wrapper>
      {data && <Filter setFilter={setFilter} filter={filter} />}
      {filtered && <Data records={filtered} />}
    </Wrapper>
  )
}

export default App;
