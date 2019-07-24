const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    if (action.type === 'INCR') {
        return {
            ...state, counter: state.counter + 1
        }
    }

    if (action.type === 'DECR') {
        return {
            ...state, counter: state.counter - 1
        }
    }

    return state;
}


const store = Redux.createStore(reducer);

// store.subscribe(() => {
//     console.log("Updated State: ", store.getState());
// });
// console.log("store", store.getState());
// store.dispatch({ type: 'INCR' });
// console.log("store", store);


const mapStateToProps = (state) => {
    return {
        cnt: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCR' }),
        decrement: () => dispatch({ type: 'DECR' }),
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("After Redux Connect ....");
        return (

            <div>
                <p>{this.props.cnt}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </div>
        );
    }
}

const ConnectedToApp = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);


ReactDOM.render(<ReactRedux.Provider store={store}>
    <ConnectedToApp />
</ReactRedux.Provider>, document.getElementById('root'));






// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0
//         }
//         this.increment = this.increment.bind(this);
//         this.decrement = this.decrement.bind(this);
//     }

//     increment() {
//         this.setState({
//             counter: this.state.counter + 1
//         })
//     }

//     decrement() {
//         this.setState({
//             counter: this.state.counter - 1
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <p>{this.state.counter}</p>
//                 <button onClick={this.increment}>+</button>
//                 <button onClick={this.decrement}>-</button>
//             </div>
//         );
//     }
// }