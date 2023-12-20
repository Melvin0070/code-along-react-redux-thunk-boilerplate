import axios from "axios";
import { fetchData } from "./ActionType";

export const fetchDataAction = (payload) => {
    return {type:fetchData, payload}
}

export const fetchAction = () =>(dispatch)=> {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{dispatch(fetchDataAction(res.data))})
}
  

