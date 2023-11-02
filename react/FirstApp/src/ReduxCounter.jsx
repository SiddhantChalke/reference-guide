import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import cntReducer from './reducers/cntReducer'

import { decCount, incCount, resCount } from './actions/action'

const ReduxCounter =()=>{
  const count = useSelector((state)=>state.cntReducer)
  const dispatch = useDispatch()
  console.log(count)

  return (
    <div className='container'>
        <h1>Counter using Redux</h1>
        <p>{count}</p>
        <br />
        <button className="btn btn-success" onClick={()=>dispatch(incCount())}>Increment</button>
        <button className="btn btn-danger" onClick={()=>dispatch(decCount())}>Decrement</button>
        <button className="btn btn-warning" onClick={()=>dispatch(resCount())}>Reset</button>
        
    </div>
  )
}

export default ReduxCounter