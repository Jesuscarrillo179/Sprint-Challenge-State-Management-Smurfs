import axios from "axios"

export const createSmurf = (index) =>
dispatch => {
    console.log(index)
    axios.post("http://localhost:3333/smurfs", index).then(res =>{
        console.log(res.data)
        dispatch({ type: "ADD_SMURF", payload: res.data})
    }).catch(err => console.log(err))
}

export const getSmurfs = () => 
dispatch => {
    axios.get("http://localhost:3333/smurfs").then(res =>{
        console.log(res.data)
        dispatch({ type: "SET_SMURF", payload: res.data})
    }).catch(err => console.log(err))
}