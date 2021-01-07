// import React, { useState, useContext } from 'react';
// import { AppContext } from '../../context/AppContext';
// import axios from 'axios';
// import './Cicero.css';

// const YourReps = ({ history }) => {
//     const { repData, setRepData } = useContext(AppContext);
//     const { address, setAddress } = useContext(AppContext);
//     const [filter, setFilter] = useState('Local');
//     const [zipcodePlaceholder, setZipcodeplaceholder] = useState(
//         'Enter Zip Code'
//     );
//     const { filteredRep, setFilteredRep } = useContext(AppContext);
//     const handleSearch = (e) => {
//         e.preventDefault();
//         setZipcodeplaceholder('Enter Zip Code');
//         setAddress(e.target.value);
//     };
//     const handleFilter = (e) => {
//         e.preventDefault();
//         setFilter(e.target.value);
//         filterRepFunc(e.target.value);
//     };
//     const handleAddress = async (e) => {
//         e.preventDefault();
//         if (!address) return;
//         try {
//             const response = await axios({
//                 method: 'GET',
//                 url: `/rep/representatives?address=${address}`,
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             if (!response.data) {
//                 swal({ text: 'Invalid Zip Code', icon: warning });
//                 setZipcodeplaceholder('Invalid Zip Code, Please Try Again!');
//                 return;
//             }
//             await setRepData(response.data);
//             await setFilteredRep(response.data.officials);
//         } catch (error) {
//             swal({ text: 'Something Went Wrong', icon: wrong });
//         }
//     };
//     const filterRepFunc = async (data) => {
//         if (data === 'All') {
//             setFilteredRep(repData.officials);
//         } else {
//             const filteredByTitle = await repData.officials.filter((rep) => {
//                 return (
//                     rep.office.chamber.government.type.toLowerCase() ===
//                     data.toLowerCase()
//                 );
//             });
//             setFilteredRep(filteredByTitle);
//         }
//     };
//     return (
//         <div>
//             <div>
//                 <form className="form-container" name="city" onSubmit={handleAddress}>
//                     <div className="TopBar">
//                         <h2>
//                             Your <span>REPS</span>
//                         </h2>
//                         <div className="search-container">
//                             <input
//                                 type="text"
//                                 placeholder={zipcodePlaceholder}
//                                 className="searchbar"
//                                 id="zipcode"
//                                 value={address}
//                                 onChange={handleSearch}
//                             />
//                             <div className="right-image-container">
//                                 <img
//                                     src={locationImage}
//                                     alt="Location"
//                                     onClick={handleAddress}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//             <div className="filters">
//                 <input
//                     type="button"
//                     id={filter === 'All' ? 'yr-active' : ''}
//                     value="All"
//                     onClick={handleFilter}
//                 />
//                 <input
//                     type="button"
//                     id={filter === 'Local' ? 'yr-active' : ''}
//                     value="Local"
//                     onClick={handleFilter}
//                 />
//                 <input
//                     type="button"
//                     className="yr-active"
//                     id={filter === 'State' ? 'yr-active' : ''}
//                     value="State"
//                     onClick={handleFilter}
//                 />
//                 <input
//                     type="button"
//                     className="yr-active"
//                     id={filter === 'National' ? 'yr-active' : ''}
//                     value="National"
//                     onClick={handleFilter}
//                 />
//             </div>
//             <div className="responselevel">
//                 <h3>
//                     {repData
//                         ? 'Local (' + repData.officials[0].office.district.state + ')'
//                         : ''}
//                 </h3>
//             </div>
//             <div className="yr-cards">
//                 {filteredRep &&
//                     filteredRep.map((rep, i) => {
//                         return (
//                             <RepsCard
//                                 key={i}
//                                 first_name={rep.first_name}
//                                 last_name={rep.last_name}
//                                 photo={rep.photo_origin_url}
//                                 party={rep.party}
//                                 position={rep.office.title}
//                                 level={rep.office.chamber.government.type}
//                                 rep={rep}
//                             />
//                         );
//                     })}
//             </div>
//         </div>
//     );
// };
// export default YourReps;
