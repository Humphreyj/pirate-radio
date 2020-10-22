import axios from 'axios';
import {GET_SONG_INFO} from './types';

export const getSongInfo = () => (dispatch) => {
    axios
    .get('https://sync.outpost.radio/api/nowplaying')
    .then(res => {
        dispatch({
            type: GET_SONG_INFO,
            payload: res.data[0]
        })
    })
    .catch(err => {
        console.log(err)
    })
}