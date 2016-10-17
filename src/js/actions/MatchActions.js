import dispatcher from "../dispatcher"
import axios from "axios"
import key from "../api-key"

const urlMatches = 'https://na.api.pvp.net/observer-mode/rest/featured?api_key='
const urlChampions = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?dataById=true&champData=image&api_key='

export function loadMatches(){
  var requests = [
    axios.get(urlMatches + key.key), axios.get(urlChampions + key.key)
  ];
  Promise.all(requests).then((responses)=> {
    dispatcher.dispatch({
      type: "RECEIVE",
      data: responses
    })
  })
}

export function reloadMatches(){
  axios.get(urlMatches + key.key).then((response)=>{
   dispatcher.dispatch({
     type: "RELOAD",
     data: response.data
   })
  })
}
