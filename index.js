const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0,
    doubleCounter: 0
}

const rootReducer = (state = initialState, action) => {

    if (action.type === 'COUNTER_INC') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === 'COUNTER_DEC') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }

    if (action.type === 'COUNTER_ADD') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    return state;
}

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log("[Subscription]", store.getState());
})

store.dispatch({ type: 'COUNTER_INC' });
store.dispatch({ type: 'COUNTER_ADD', value: 100 });
store.dispatch({ type: 'COUNTER_DEC' });