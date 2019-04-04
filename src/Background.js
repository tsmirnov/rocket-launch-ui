import React from 'react'

export default () => (
  <div className="background-container">
    <img
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
      alt=""
      style={{
        height: '70vh',
        width: '70vh',
        position: 'absolute',
        zIndex: 3,
        right: 20,
        top: 20,
      }}
    />
    <div className="stars" />
    <div className="twinkling" />
    <div className="clouds" />
  </div>
)
