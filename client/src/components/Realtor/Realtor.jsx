import React, { useState, useEffect, useContext } from 'react';
import './Realtor.css';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import RealtorCard from './RealtorCard';

function Realtor() {
  const [realtorData, setRealtorData] = useState(null);
  const { contextSearch, setContextSearch } = useContext(AppContext);
  const [number, setNumber] = useState(5);

  useEffect(() => {
    const getRealtor = async () => {
      try {
        const response = await axios.get(`/api/realtor?term=${contextSearch}`);
        setRealtorData(response.data.properties);
        console.log(response.data.properties);
      } catch (error) {
        console.log(error);
      }
    };

    getRealtor();
  }, [contextSearch]);

  const handleClick = () => {
    if (number + 4 > realtorData.length) return;
    setNumber((num) => {
      return num + 4;
    });
  };

  const handleMinusClick = () => {
    if (number - 4 < 0) return;
    setNumber((num) => {
      return num - 4;
    });
  };

  return (
    <div class="realtorContainer">
      <h1 class="header1">Realtor</h1>
      <div class="realtorCard">
        <button className="less-more" onClick={handleMinusClick}>
          ←
        </button>
        {realtorData?.map((realtor, index) => {
          return index < number && index >= number - 4 ? (
            <div key={realtor.id}>
              <RealtorCard realtor={realtor} />
            </div>
          ) : null;
        })}
        <button className="less-more" onClick={handleClick}>
          →
        </button>
      </div>
    </div>
  );
}

export default Realtor;
