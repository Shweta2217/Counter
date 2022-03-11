import { createStore } from 'redux';


function counterReducer(state = {counter : 0, toggle:true}, action) {
    
    if(action.type === 'Increment') return {counter: state.counter+1, toggle:state.toggle};
    
    if(action.type === 'Decrement') return {counter: state.counter-1,toggle:state.toggle};
    
    if(action.type === 'Increase') return { counter: state.counter + action.value,toggle:state.toggle }
    
    if(action.type === 'toggle') return {toggle: !state.toggle, counter: state.counter}

    return state;
}

const store = createStore(counterReducer);

export default store

