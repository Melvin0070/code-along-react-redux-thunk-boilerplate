import { fetchData } from "./ActionType";
const initState = {
    data:[]
}
export const reducer = (state = initState, action) => {
    switch (action.type) {
    case fetchData:
      return {
        ...state,
        data: action.payload,
      };
    
    default:
      return state;
  }

}