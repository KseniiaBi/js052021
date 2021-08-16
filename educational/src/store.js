import { createStore } from 'redux';

const store = createStore(reducer, 0);

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':  return state+1;
        case 'DECREMENT': return state-1;
        
        default: return state;
    }
}

export default store;
