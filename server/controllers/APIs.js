const axios = require('axios');
// const Representatives = require('../db/models/representatives');

exports.getYelpAPI = async (request, response) => {
  try {
    const data = await axios.get(
      'https://api.yelp.com/v3/businesses/search?location="33127"&term="business"&radius=300',
      { headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` } }
    );
    response.json(data.data.businesses);
  } catch (e) {
    console.log(e);
  }
};

exports.searchYelpAPI = async (request, response) => {
  try {
    const { location } = request.query;
    const data = await axios.get(
      `https://api.yelp.com/v3/businesses/search?location=${location}`,
      { headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` } }
    );
    response.json(data.data.businesses);
  } catch (e) {
    console.log(e);
  }
};

//Shools API
exports.searchSchoolsAPI = async (request, response) => {
  try {
    const { term } = request.query;
    const data = await axios.get(
      `https://api.greatschools.org/schools/nearby?key=${process.env.GREAT_SCHOOLS_API_KEY}&city=${term}&state=FL`
    );
    response.send(data.data);
  } catch (e) {
    console.log(e);
  }
};

//Realtor API
exports.searchRealtorAPI = async (request, response) => {
  try {
    const { term } = request.query;
    const data = await axios.get(
      // `https://rapidapi.com/apidojo/api/realtor?endpoint=${process.env.REALTOR_API_KEY}`
      'https://realtor.p.rapidapi.com/properties/v2/list-for-sale?endpoint=${process.env.REALTOR_API_KEY}&city=Edgewater&limit=200&offset=0&state_code=FL'
    );
    response.send(data.data);
  } catch (e) {
    console.log(e);
  }
};

//Ciceros API

exports.getRepByAPI = async (req, res) => {
  try {
    const city = req.query.city;
    const { data } = await axios.get(
      `https://cicero.azavea.com/v3.1/official?search_city=${city}&search_country=US&order=district_type&sort=desc&format=json&key=${process.env.CICERO_API_KEY}`
    );
    const response = data.response.results.candidates[0];
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
};
