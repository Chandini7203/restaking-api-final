const axios = require('axios');

async function fetchRestakersFromSubgraph() {
  const query = `
    {
      restakers {
        id
        stakedAmount
        operator {
          id
        }
      }
    }
  `;

  const response = await axios.post(
    'https://api.thegraph.com/subgraphs/name/eigenlayer/restaking',
    { query }
  );

  return response.data.data.restakers;
}

module.exports = {
  fetchRestakersFromSubgraph
};
