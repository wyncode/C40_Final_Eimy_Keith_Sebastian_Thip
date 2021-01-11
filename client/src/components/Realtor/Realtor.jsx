import React, { useState, useEffect, useContext } from 'react';
import './Realtor.css';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import RealtorCard from './RealtorCard';

function Realtor() {
  const [realtorData, setRealtorData] = useState(null);
  const { contextSearch, setContextSearch } = useContext(AppContext);

  useEffect(() => {
    const getRealtor = async () => {
      try {
        const response = await axios.get(`/api/realtor?term=${contextSearch}`);
        setRealtorData(response.data.realtor);
        console.log(response.data.realtor);
      } catch (error) {
        console.log(error);
      }
    };

    getRealtor();
  }, []);

  return (
    <div class="realtorContainer">
      <h1>Realtor</h1>
      <div class="realtorCard">
        {realtorData?.map((realtor) => {
          return (
            <div key={realtor.id}>
              {' '}
              <RealtorCard realtor={realtor} />{' '}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Realtor;
