import React from 'react';
import './IntroBanner.scss'

export function IntroBanner(props) {
  return (
    <div className="intro-banner">
      <div className="image-wrapper" style={{ backgroundImage:  `url(${props.backgroundImageUrl})`}}>
        <div className="intro-wrapper">
          <h1 className="title">{props.title}</h1>
          <label className="intro">{props.intro}</label>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  )
}