import React from 'react'

function Child (props){
  // const name = props.name;
  // const talent = props.talent;
  // const adject = props?.adject;


  var child = 'message from child component - I am a Child in parent component.';

  return (
    <div>
        {/* <p>This is little {name} with <u> <i>{adject}</i> <b>{talent}</b> </u>abilities.</p> */}
        {props.handleCB(child)} 
    </div>
  )
}

export default Child