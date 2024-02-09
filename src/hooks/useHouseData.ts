import { useState, useEffect } from 'react';
import axios from 'axios';

export interface IHouseData {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: {
    id: string;
    firstName: string;
    lastName: string;
  }[];
  traits: {
    id: string;
    name: string;
  }[];
}

const useHousesData = () => {
  const [data, setData] = useState<IHouseData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://wizard-world-api.herokuapp.com/Houses');
        const jsonData = response.data as IHouseData[];
        setData(jsonData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addHouseData = (newData: IHouseData) => {
    setData((prevData) => (prevData ? [...prevData, newData] : [newData]));
  };

  return { data, loading, error, addHouseData };
};

export default useHousesData;