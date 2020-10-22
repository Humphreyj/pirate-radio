import {
  GET_SONG_INFO
} from '../types'

const initialState = {
  data: {}
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
