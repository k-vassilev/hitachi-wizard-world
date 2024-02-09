import React, { useState, useEffect } from 'react';
import { IHouseData } from '../../hooks/useHouseData';
import './table.css';

interface TableProps {
  data: IHouseData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [sortedData, setSortedData] = useState<IHouseData[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [animalFilter, setAnimalFilter] = useState<string>('');

  useEffect(() => {
    if (data) {
      setSortedData(data);
    }
  }, [data]);
  console.log(data)

  const sortData = (key: keyof IHouseData) => {
    if (key === 'name') {
      const order = sortOrder === 'asc' ? 1 : -1;
      const sorted = [...data].sort((a, b) => {
        const valueA = typeof a[key] === 'string' ? (a[key] as string) : '';
        const valueB = typeof b[key] === 'string' ? (b[key] as string) : '';

        return valueA.localeCompare(valueB) * order;
      });

      setSortedData(sorted);
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }
  };

  const filterData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setAnimalFilter(value);

    const filtered = data.filter((house) => house.animal.toLowerCase().includes(value));
    setSortedData(filtered);
  };

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="Filter by Animal"
        value={animalFilter}
        onChange={filterData}
        className="filter-input"
      />
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => sortData('name')}>
              Name {sortOrder === 'asc' ? '↑' : '↓'}
            </th>
            <th onClick={() => sortData('animal')}>Animal</th>
            <th onClick={() => sortData('ghost')}>Ghost</th>
            <th onClick={() => sortData('commonRoom')}>Common Room</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((house) => (
            <tr key={house.id}>
              <td>{house.name}</td>
              <td>{house.animal}</td>
              <td>{house.ghost}</td>
              <td>{house.commonRoom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
