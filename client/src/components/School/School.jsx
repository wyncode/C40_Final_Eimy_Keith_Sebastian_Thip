import React, { useState, useEffect, useContext } from 'react';
import './School.css';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import SchoolCard from './SchoolCard';

function Schools() {
  const [schoolData, setSchoolData] = useState(null);
  const [number, setNumber] = useState(5);
  const { contextSearch, setContextSearch } = useContext(AppContext);

  useEffect(() => {
    const getSchools = async () => {
      try {
        const response = await axios.get(`/api/schools?term=${contextSearch}`);
        setSchoolData(response.data.schools.school);
        console.log(response.data.schools.school);
      } catch (error) {
        console.log(error);
      }
    };

    getSchools();
  }, [contextSearch]);
  const handleClick = () => {
    setNumber((num) => num + 4);
  };

  const handleMinusClick = () => {
    if (number - 4 < 0) return;
    setNumber((num) => {
      return num - 4;
    });
  };

  return (
    <div className="schoolContainer">
      <h1 className="header1">Schools</h1>
      <div className="schoolCards">
        <button className="less-more" onClick={handleMinusClick}>
          ←
        </button>
        {schoolData?.map((school, index) => {
          return index >= number - 4 && index < number ? (
            <div key={school.id}>
              <SchoolCard school={school}></SchoolCard>
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

export default Schools;
