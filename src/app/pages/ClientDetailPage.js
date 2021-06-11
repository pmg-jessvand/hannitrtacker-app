import React from 'react'
import { Link } from 'react-router-dom';
// Apollo Imports
import { gql, useQuery } from '@apollo/client';
// Component Imports
import { ClientInfoItem, PageHeader, ProjectList } from '../components';

import * as Routes from '../routes';

const ClientsDetailPage = ({match: {params} }) => {

  const CLIENT = gql `
    query nodeById($id: String!){
      nodeById(id: $id) {
        title
        uuid
        
        ... on NodeKlant {
          fieldKlantEmail
          fieldKlantTelefoonnummer
          fieldKlantAdres
          fieldKlantContactPersoon
          fieldKlantWebsite
          fieldClientProjects {
            entity {
              title
              entityId
              uuid
            }
          }
        }
      }
    }
  `;

  const { data } = useQuery(CLIENT, {
    variables: { id: params.id },
    fetchPolicy: 'cache-first',
  });

  if(data) {
    const {nodeById} = data;

    return (
      <div className="page clients-page">
        <PageHeader title={nodeById.title} />
        <div className="container">
          <Link to={Routes.CLIENTS} className="backlink" ><i className="fas fa-arrow-circle-left"></i></Link>
          {data ?
            <div className="row">
              <div className="col-12 col-md-12 col-lg-5 col-xl-5 client-detail-col">
                <div className="client-info-wrapper">

                  <ClientInfoItem slug="id" label="Klant ID" value={nodeById.uuid} />
                  <ClientInfoItem slug="name" label="Naam" value={nodeById.title} />
                  <ClientInfoItem slug="email" label="E-mail" value={nodeById.fieldKlantEmail} />
                  <ClientInfoItem slug="telephone" label="Telefoon" value={nodeById.fieldKlantTelefoonnummer} />
                  <ClientInfoItem slug="address" label="Adres" value={nodeById.fieldKlantAdres} />
                  <ClientInfoItem slug="contact" label="Contactpersoon" value={nodeById.fieldKlantContactPersoon} />
                  <ClientInfoItem slug="website" label="Website" value={nodeById.fieldKlantWebsite} />
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-5 col-xl-5 client-detail-col">
                <div className="client-projects-wrapper">
                  <h2>Projecten</h2>
                  { nodeById.fieldClientProjects.length > 0 ?
                  
                    <ProjectList listdata={nodeById.fieldClientProjects} />
                  
                  : <p>Geen projecten...</p>
                  
                  }
                </div>
              </div>
            </div>
            : 
            <p>Loading...</p>
          }
        </div>
      </div>
    )

  } else {
    return null;
  }
}

export default ClientsDetailPage;
