import { useReducer } from "react"

const initialState={count:0}

const reducer=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const Reducer=()=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    return(
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default Reducer