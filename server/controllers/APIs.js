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
