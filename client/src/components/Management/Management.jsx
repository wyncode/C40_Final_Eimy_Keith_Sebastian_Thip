import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Management = () => {
  const [managementResult, setManagementResult] = useState(null);
  const { contextSearch, setContextSearch } = useContext(AppContext);

  useEffect(async () => {
    const response = await axios.get(
      `/api/management/main?term=${contextSearch}`
    );
    setManagementResult(response.data);
  }, []);

  return (
    <div>
      {managementResult?.map((result) => {
        return <ManagementTile data={result}></ManagementTile>;
      })}
    </div>
  );
};

export default Management;

//make 'mananagementTile' component and then bring in {data}
//similiar to what we did with history in bringing in a prop.

//const Management = (prop that we're passing) .. refer to line 5
//then destructure prop and replace with {data}

//data.(whatever we're trying to access.. depends on what the object looks like - if it's even an object)
//ex. data.name (whatever our data looks like)
