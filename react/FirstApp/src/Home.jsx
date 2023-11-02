import React from 'react'
import { Image } from 'react-bootstrap'
import Child from './Child'

function Home (){
  function callBack(child){
    return(
      <>
      {/* <p>{props.name} has {props.talent} talent</p> */}
      <p>{child}</p>
      </>
    )
  }

  return (
    <div className='text-center'>
        <p>This is a <b>Home</b> component.</p>
        <Image src="/homeImg.png" fluid id='image' style={{animation:'ease',translate:'10%'}}/>

        {/* <Child talent='chess' adject='good' name='Ramesh' /> */}
        {/* <Child talent='singing' adject='bad' name='Suresh' /> */}
        <Child  handleCB={callBack} />
    </div>
  )
}

export default Home