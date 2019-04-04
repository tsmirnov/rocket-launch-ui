import React from 'react'

export default ({
  label,
  name,
  url,
  paddingTop,
}) => (
  <div style={{paddingTop}}>
    <b>{label}: </b>
    {name && url &&
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    }
    {name && !url && name}
    {!name && 'Unknown'}
  </div>
)
