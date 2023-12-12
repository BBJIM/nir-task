import {useEffect, useState, useMemo} from 'react'
import {reconciliatedData} from './types/reconciliatedData';
import {fetchData} from './api/fetchData';
import styled from 'styled-components';
import Filter from './components/Filter';
import Row from './components/Row';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function App() {
  const [data, setData] = useState<reconciliatedData[]>();
  const [filter, setFilter] = useState<reconciliatedData[]>()

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
    });
  }, []);

  const filtered = useMemo(() => {
    return data;
  }, [data, filter])

  return (
    <Wrapper>
      {data && <Filter setFilter={setFilter} />}
      {filtered?.map(record => {
        return <Row record={record} />
      })}
    </Wrapper>
  )
}

export default App;
