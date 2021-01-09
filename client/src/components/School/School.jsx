import React, { useState, useEffect, useContext } from 'react';
import './School.css';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import SchoolCard from './SchoolCard';

function Schools() {
  const [schoolData, setSchoolData] = useState(null);
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
  }, []);

  return (
    <div className="schoolContainer">
      <h1>Schools</h1>
      <div className="schoolCards">
        {schoolData?.map((school) => {
          return (
            <div key={school.id}>
              {' '}
              <SchoolCard school={school} />{' '}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Schools;
