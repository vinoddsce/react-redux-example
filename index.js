let initialState = {
    counter: 0
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE': return { ...state, counter: state.counter + 1 }
        case 'DECREASE': return { ...state, counter: state.counter - 1 }
        default: return state
    }
}

let store = Redux.createStore(reducer)

console.log("store", store);

class RootComponent extends React.Component {
    render() {
        console.log("this", this.dispatch);
        return <div>
            <div>{this.props.number}</div>
            <button onClick={this.props.increase}>+</button>
            <button onClick={this.props.decrease}>-</button>
        </div>
    }
}

let mapStateToProps = state => {
    return {
        number: state.counter
    }
}

let mapDispatchToProps = dispatch => {
    return {
        increase: () => dispatch({ type: 'INCREASE' }),
        decrease: () => dispatch({ type: 'DECREASE' })
    }
}


const ConnectedRootComponent = ReactRedux.connect(
    mapStateToProps, mapDispatchToProps
)(RootComponent)
console.log("ConnectedRootComponent", ConnectedRootComponent);

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <ConnectedRootComponent />
    </ReactRedux.Provider>, document.getElementById('root'))


