import React from 'react'
// Apollo Imports
import { gql, useQuery } from '@apollo/client';
// Component Imports
import { Overview } from '../components';

const CLIENTS = gql `
  query {
    nodeQuery(
      filter: {conditions: [{operator: EQUAL, field: "type", value: ["klant"]}]}
      sort: {field: "title", direction: ASC}
    ) {
        entities {
          entityId
          entityLabel
          
          ... on NodeKlant {
          fieldKlantAdres,
          fieldKlantEmail
        }
      }
    }
  }
`;

const ClientsPage = () => {

  const { data } = useQuery(CLIENTS, {
    fetchPolicy: 'cache-first',
  });

  return (
    <div className="page clients-page">
      <div className="container">
        <h1>Klanten</h1>
        {data ? 

          <div className="client-overview-container">
            <Overview listdata={data.nodeQuery.entities}/>
          </div>
        
        : <p>Loading data...</p> }
      </div>
    </div>
  )
}

export default ClientsPage;
