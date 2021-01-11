import React, { useState, useEffect, useContext } from 'react';
import './Crime.css';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import CrimeCard from './CrimeCard';

function Crime() {
  const [crimeData, setCrimeData] = useState(null);
  const { contextSearch, setContextSearch } = useContext(AppContext);

  useEffect(() => {
    const getCrime = async () => {
      try {
        const response = await axios.get(`/api/crime?term=${contextSearch}`);
        setCrimeData(response.data.crime.crime);
        console.log(response.data.crime.crime);
      } catch (error) {
        console.log(error);
      }
    };

    getCrime();
  }, []);

  // return (
  //   <div className="crimeContainer"></div>
  //     <h1>crime</h1>
  //     <div className="crimeCards">
  //       {crimeData?.map((crime) => {
  //         return (
  //           <div key={crime.id}>
  //             {' '}
  //             <CrimeCard crime={crime} />{' '}
  //           </div>
  //         );
  //       })}
  //     </div>
  // );
}

export default Crime;
