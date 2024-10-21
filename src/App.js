import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from './Features/apiSlice';
import Home from './Component/Home';
function App() {
 
 const count = useSelector((state) => state.apiCall)

  const dispatch = useDispatch()
  if (count.isLoading) {
    return <h1>Loading....</h1>;
  }
  return (


    <>
    <Home/>

    <h1>App Page</h1>
 
 <button onClick={(e) => dispatch(fetchTodos())}> get data </button>

   {count.data && count.data.map((e) => <li>{e.title}</li>)}
    </>
   
  );
}

export default App;
