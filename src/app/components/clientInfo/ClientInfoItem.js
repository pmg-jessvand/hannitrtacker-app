import React from 'react'

const ClientInfoItem = ({ slug, label, value }) => {
  return (
    <div className={`client-info client-info-${slug}`}>
      <p className="client-info-label">{ label }:</p>
      <p>{ value }</p>
    </div>
  )
}

export default ClientInfoItem
