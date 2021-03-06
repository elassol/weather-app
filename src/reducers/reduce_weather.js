import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // console.log('action recieved ', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);
            // Same way in both lines
            return  [ action.payload.data, ...state ];
    }
    return state;
}