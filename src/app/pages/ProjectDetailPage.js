import React from 'react'
import { Link } from 'react-router-dom'
// Apollo Import
import { gql, useQuery } from '@apollo/client';
// Components Import
import { EditButton, PageHeader, ProjectListItem } from '../components';

const ProjectDetailPage = ({match: {params} }) => {

  const PROJECT_BY_ID = gql `
    query nodeQuery($uuid: String!){
      nodeQuery(filter: {
        conjunction: AND,
        conditions: [
          {operator: EQUAL, field: "type", value: ["project"]},
          {operator: EQUAL, field: "uuid", value: [$uuid]},
        ]
      }) {
        entities {
          entityLabel
          entityId
          ... on NodeProject {
            fieldProjectTasks {
              entity {
                title
                entityId
                entityUuid
              }
            }
            fieldKlant {
              entity {
                entityLabel
                entityId
              }
            }
          }
        }
      }
    }
  `;

  const { data } = useQuery(PROJECT_BY_ID, {
    variables: { uuid: params.id },
    fetchPolicy: 'cache-first',
  });

  if(data) {
    // Converting queryvalues to easy-to-use variables
    const { entities } = data.nodeQuery;
    const { entityLabel: projectLabel, entityId: projectId, fieldProjectTasks: projectTasks, fieldKlant: projectClient } = entities[0];

    return (
      <div className="page project-detail-page">
        <PageHeader title={`${projectClient.entity.entityLabel} - ${projectLabel} `} />
        <div className="container animate__animated animate__slideInRight">
          <div className="buttons-wrapper">
            <Link to={`/klanten/${projectClient.entity.entityId}`} className="backlink" ><i className="fas fa-arrow-circle-left"></i></Link>
            <EditButton nodeId={projectId} label="Project bewerken" />
          </div>
          <div className="project-detail-tasklist">
            {projectTasks.length > 0 ? projectTasks.map(task => (
              <ProjectListItem
                key={task.entity.entityUuid}
                title={task.entity.title}
                slug={`/opdrachten/${task.entity.entityUuid}`}
                uuid={task.entity.entityUuid}
              />
            ))
    
            : <p>Geen projecten...</p>
            }
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="page projecet-detail-page">
        <PageHeader title="Project" />
        <div className="container">
          <div className="project-detail-tasklist">
            <p>Geen opdrachten...</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDetailPage
