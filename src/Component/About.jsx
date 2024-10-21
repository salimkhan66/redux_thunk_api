import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchTodos } from '../Features/apiSlice';
function About() {
    const count = useSelector((state) => state.apiCall)
    const dispatch = useDispatch()
  if (count.isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
    <h1>About Page</h1>
    <button onClick={(e) => dispatch(fetchTodos())}> get data </button>

    {count.data && count.data.map((e) => <li>{e.title}</li>)}
    </>
  )
}

export default About