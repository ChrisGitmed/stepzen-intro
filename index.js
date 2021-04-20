const { request, gql } = require('graphql-request');

const query = gql`
  {
    continents {
      name
      code
    }
  }
`;
async function getResults() {
  const results = await request('https://countries.trevorblades.com/', query, variables);
  console.log('results:', results);
}

getResults();
//const results = await request('https://countries.trevorblades.com/', query);

//console.log('results: ', results);