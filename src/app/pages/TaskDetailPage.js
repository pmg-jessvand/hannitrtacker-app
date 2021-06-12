import React from 'react'
import { Link } from 'react-router-dom';
// Apollo Import
import { gql, useQuery } from '@apollo/client';
// Components Import
import { PageHeader, Stopwatch } from '../components';

const TaskDetailPage = ({ match: {params} }) => {

  const TASK_BY_ID = gql `
    query nodeQuery($uuid: String!){
      nodeQuery(filter: {
        conjunction: AND,
        conditions: [
          {operator: EQUAL, field: "type", value: ["opdracht"]},
          {operator: EQUAL, field: "uuid", value: [$uuid]},
        ]
      }) {
        entities {
          ... on NodeOpdracht {
            title
            fieldTaskDescription
            fieldTaskEstimatedTime
            fieldTaskTotalTime
            fieldTaskKlant {
              entity {
                entityLabel
              }
            }
            fieldTaskProject {
              entity {
                entityLabel
                entityUuid
              }
            }
          }
        }
      }
    }
  `;

  const { data } = useQuery(TASK_BY_ID, {
    variables: { uuid: params.id },
    fetchPolicy: 'cache-first',
  });

  if(data) {

    // Converting queryvalues to easy-to-use variables
    const { entities } = data.nodeQuery;
    const { 
      title,
      fieldTaskDescription,
      fieldTaskEstimatedTime: taskEstTime,
      fieldTaskProject: taskProject,
      fieldTaskKlant: taskClient,
    } = entities[0];

    return (
      <div className="page page-task-detail">
        <PageHeader title={title}/>
        <div className="container">
          <Link to={`/projecten/${taskProject.entity.entityUuid}`} className="backlink"><i className="fas fa-arrow-circle-left"></i></Link>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
              <div className="tasks-wrapper">
                <div className="task-item">
                  <i className="fas fa-user"></i>
                  <p>{taskClient.entity.entityLabel}</p>
                </div>
                <div className="task-item">
                  <i className="fas fa-clipboard-list"></i>
                  <p>{taskProject.entity.entityLabel}</p>
                </div>
                <div className="task-item">
                  <i className="fas fa-user-clock"></i>
                  <p>{taskEstTime} min</p>
                </div>
                <div className="task-item">
                  <i className="fas fa-th-list"></i>
                  <p>{fieldTaskDescription}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
              <Stopwatch />
            </div>
          </div>
        </div>
      </div>
    )

  } else {
    return(
      <>
      </>
    )
  }
}

export default TaskDetailPage;