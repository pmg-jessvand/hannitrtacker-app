import React from 'react'
import { Link } from 'react-router-dom';
// Apollo Import
import { gql, useQuery } from '@apollo/client';
// Components Import
import { EditButton, PageHeader, Stopwatch } from '../components';

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
            entityId
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
      entityId, 
      title,
      fieldTaskDescription,
      fieldTaskEstimatedTime: taskEstTime,
      fieldTaskTotalTime: totalTime,
      fieldTaskProject: taskProject,
      fieldTaskKlant: taskClient,
    } = entities[0];

    // Convert time in minutes from backend to time in seconds for timer
    const getTimerValue = (value) => {
      return value * 60;
    }

    return (
      <div className="page page-task-detail">
        <PageHeader title={title}/>
        <div className="container animate__animated animate__slideInRight">
          <div className="buttons-wrapper">
          { taskProject != null ?
            <Link to={`/projecten/${taskProject.entity.entityUuid}`} className="backlink"><i className="fas fa-arrow-circle-left"></i></Link>
            : <Link to={`/klanten`} className="backlink"><i className="fas fa-arrow-circle-left"></i></Link>
          }
            <EditButton nodeId={entityId} label="Opdracht bewerken" />
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
              <div className="tasks-wrapper">
                <div className="task-item">
                  <i className="fas fa-user"></i>
                  { taskClient != null ?
                    <p>{taskClient.entity.entityLabel}</p>
                    : <EditButton nodeId={entityId} label="Voeg klant toe" />
                  }
                </div>
                <div className="task-item">
                  <i className="fas fa-clipboard-list"></i>
                  { taskProject != null ?
                    <p>{taskProject.entity.entityLabel}</p>
                    : <EditButton nodeId={entityId} label="Voeg project toe" />
                  }
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
              <Stopwatch taskId={entityId} startValue={getTimerValue(totalTime)} />
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