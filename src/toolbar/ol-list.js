import React from 'react'

let OlList = ({onClick}) => {
  return (
    <button className="fs-editor-toolbar-button" onClick={onClick}>
      <svg viewBox="0 0 18 18">
        <line className="fs-editor-stroke" x1="7" x2="15" y1="4" y2="4"></line> 
        <line className="fs-editor-stroke" x1="7" x2="15" y1="9" y2="9"></line> 
        <line className="fs-editor-stroke" x1="7" x2="15" y1="14" y2="14"></line> 
        <line className="fs-editor-stroke fs-editor-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"></line> 
        <path className="fs-editor-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"></path> 
        <path className="fs-editor-stroke fs-editor-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"></path> 
        <path className="fs-editor-stroke fs-editor-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"></path>
      </svg>
    </button>
  )
}

export default OlList