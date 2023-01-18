import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { orders } from '../data';

const options = [
  { value: 'id', label: 'По номеру заказа' },
  { value: 'email', label: 'По email' },
  { value: 'amount', label: 'По сумме' },
  { value: 'date', label: 'По дате' },
];

const Wrapper = styled.div`
  padding: 20px 20px 24px 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  /* overflow: hidden; */

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  align-items: center;

  background-color: #ffffff;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
`;

const Title = styled.h1`
  font-size: var(--fs-32);
  font-weight: var(--fw-bold);
  line-height: 38.73px;
`;

const OrdersTableWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow: auto;
`;

const OrdersTable = styled.table`
  width: 95%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0 10px;

  overflow: auto;

  & tr {
    border-radius: var(--radii);
    overflow: hidden;
    outline: 1px solid #ebebeb;
  }

  & tr td,
  tr th {
    text-align: left;
    padding: 10px;
    overflow: hidden;
    white-space: nowrap;

    font-size: var(--fs-14);
    line-height: 16.94px;
  }

  & tr td[id='id'] {
    text-align: center;
  }

  & thead tr {
    background-color: #f7f5f5;
  }

  & thead tr th:nth-child(1) {
    width: 20%;
  }

  & thead tr th:nth-child(2) {
    width: 30%;
  }

  & thead tr th:nth-child(3) {
    width: 15%;
  }

  & thead tr th:nth-child(4) {
    width: 35%;
  }
`;

const MoreButton = styled.button`
  width: 254px;
  height: 42px;
  border: 1px solid #eceaea;
  border-radius: var(--radii);

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  font-size: var(--fs-16);
  font-weight: var(--fw-bold);
  line-height: 19.36px;

  color: #595959;
  background-color: #f7f5f5;
  cursor: pointer;

  transition: background-color linear 0.2s;

  outline: none;

  &:hover {
    background-color: #c5c5c5;
  }

  &:focus {
    border: 1px solid black;
  }
`;

const Filter = styled.select`
  text-align: center;
  width: 224px;
  padding: 6px 37px 11px;
  color: #595959;

  background-color: #f7f5f5;
  border: 1px solid #eceaea;
  border-radius: var(--radii);

  font-size: var(--fs-14);
  font-weight: var(--fw-bold);
  line-height: 16.94px;

  outline: none;

  cursor: pointer;

  transition: background-color linear 0.2s;

  &:hover {
    background-color: #c5c5c5;
  }

  &:focus {
    border: 1px solid black;
  }
`;

const formatDate = str => str.split('-').reverse().join('.');

const sortData = (data, key) => {
  if (key === 'id') return data.sort((a, b) => a.id - b.id);
  if (key === 'email') return data.sort((a, b) => a.email - b.email);
  if (key === 'amount') return data.sort((a, b) => a.amount - b.amount);
  if (key === 'date') return data.sort((a, b) => a.date - b.date);
};

export const Orders = () => {
  const [dataToShow, setDataToShow] = useState([]);
  const [lastIndex, setLastIndex] = useState(0);
  const [complete, setComplete] = useState(false);
  const [sortBy, setSortBy] = useState('id');
  const [sortedData, setSortedData] = useState(orders);

  const handleChange = e => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    const moreItems = sortedData.slice(lastIndex, lastIndex + 5);
    setDataToShow([...dataToShow, ...moreItems]);
    // eslint-disable-next-line
  }, [lastIndex]);

  useEffect(() => {
    if (dataToShow.length === orders.length) {
      setComplete(true);
    }
  }, [dataToShow]);

  useEffect(() => {
    setSortedData(sortData(orders, sortBy));
  }, [sortBy]);

  const getMore = () => {
    setLastIndex(prev => prev + 5);
  };

  return (
    <Wrapper>
      <Title>Заказы</Title>
      <Filter onChange={handleChange} value={sortBy}>
        {options.map(option => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </Filter>
      <OrdersTableWrapper>
        <OrdersTable>
          <thead>
            <tr>
              <th>Номер заказа</th>
              <th>Email</th>
              <th>Сумма</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
            {dataToShow.map(order => {
              return (
                <tr key={order.id}>
                  <td id="id">{order.id}</td>
                  <td>{order.email}</td>
                  <td>{order.amount}</td>
                  <td>{formatDate(order.date)}</td>
                </tr>
              );
            })}
          </tbody>
        </OrdersTable>
      </OrdersTableWrapper>
      {!complete && <MoreButton onClick={getMore}>Показать еще...</MoreButton>}
    </Wrapper>
  );
};
