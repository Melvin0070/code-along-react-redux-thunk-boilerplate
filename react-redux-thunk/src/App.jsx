import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {fetchAction} from './redux/Action'

function App() {
  const data = useSelector(state => state.data)
  console.log(data)
  const dispatch = useDispatch()


  const getData = () => {
    dispatch(fetchAction())
    }
  

  return (
    <>   
    <button onClick={getData}>Get Data</button>
    <div>
    {data.map((item)=>{
      return <div key={item.id}>
        <h1>{item.name}</h1>
        {item.email}
        <hr />
        </div>
    })}
    </div>
    </>
  )
}
export default App
