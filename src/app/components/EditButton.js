import React from 'react';
// Hooks Import
import { useGetBaseUri } from '../hooks';

const EditButton = ({nodeId, label}) => {

  const baseUri = useGetBaseUri();

  return (
    <a 
      className="edit-button"
      href={`${baseUri}/node/${nodeId}/edit`} 
      target="_blank" rel="noreferrer"
    >
      {label ? label : null}
      <i className="fas fa-edit"></i>
    </a>
  );
}

export default EditButton;