import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API = () => {
  const [data, setData] = useState('')
  // const loadData = async ()=>{
  //   const res = await fetch('https://punapi.rest/api/pun');
  //   const rec = await res.json();
  //   console.log(rec);
  //   setData(rec);
  // }
  const loadTool = async () => {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'abba0d8324msh1906dca23c98c96p15e0c5jsna5b6365202d6',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    // loadData()
    loadTool()
  }, [])



  return (
    <div>
      <p>{data}</p>
      <hr />
      <p><b>A component's lifecycle</b> has three main phases: the Mounting Phase, the Updating Phase, and the Unmounting Phase.</p>
      <ul>
        <li>The mounting phase refers to the period when a component is being created and inserted into the DOM.</li>
        <li>This phase occurs when a component's props or state changes, and the component needs to be updated in the DOM.</li>
        <li>The unmounting phase refers to the lifecycle stage when a component is being removed from the DOM and is no longer rendered or accessible.</li>
      </ul>
      <Link to='https://www.freecodecamp.org/news/react-component-lifecycle-methods/'>More info</Link>
      <hr />
      <b>How useEffect uses Lifecycle methods</b>
      <ul>
        <li>To implement componentDidMount(), we need to set an empty array as a useEffect dependency.</li>
        <li>To implement componentDidUpdate(), we need to set at least one variable as hook's dependency.</li>
        <li>To implement componentDidUnmount(), we need to return a function from the hook (A cleanup function).</li>
      </ul>
      <Link to='https://blog.prototyp.digital/react-useeffect-explained-with-lifecycle-methods/'>More info</Link>
    </div>
  )
}

export default API