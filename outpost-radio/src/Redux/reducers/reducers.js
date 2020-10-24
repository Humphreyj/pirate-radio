import {
  GET_SONG_INFO
} from '../types'

const initialState = {
  data: {},
  posts: [
    {
      id:0,
      title:  "Space Bastards strike again",
      text: "The Space Bastards have struck another tradimg convoy around Stanton. Led by the handsome Varia..."
    },
    {
      id:1,
      title:  "Production slows at RSI",
      text: "RSI stocks plummet amidst another quarter of reduced sales and production. Someone close to..."
    },
    {
      id:2,
      title:  "IAE 2950 at New Babbage",
      text: "It is all but confirmed that IAE 2950 will be heald at New Babbage. Some experts speculate that..."
    },
    {
      id:3,
      title:  "Critics target Klescher's escape record. ",
      text: "Many citizens have spent time in the Kelscher rehabilitation facility. That condescending voice..."
    },{
      id:0,
      title:  "Crime at record levels",
      text: "Crime is up around Stanton and reports of Vanduul have skyrocketed. A record number of..."
    },
  ]
}

export default function songReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SONG_INFO:
      return {
        ...state,
        data: action.payload
      }
      default: return state
  }
  
}
