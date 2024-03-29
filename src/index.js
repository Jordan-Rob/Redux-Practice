import React from 'react';
import ReactDOM from 'react-dom/client';
import noteReducer from './reducers/noteReducer';
import App from './App';

import { createStore } from "redux";
import { Provider } from 'react-redux';

/*
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1 
    case 'ZERO':
      return 0
    default:
      return state
  }
}


const store = createStore(counterReducer)

const App = () => {
  return (
    <div>
      <div>
        {store.getState()}
      </div>
      <button onClick={ e => store.dispatch({ type: 'INCREMENT' })}>
        plus
      </button>
      <button onClick={ e => store.dispatch({ type: 'DECREMENT' }) }>
        minus
      </button>
      <button onClick={ e => store.dispatch({ type: 'ZERO' }) }>
        zero
      </button>
    </div>
  )
}

*/

/*
const noteReducer = (state = [], action) => {
  if (action.type === 'NEW_NOTE') {
    state.push(action.data)
    return state
  }

  return state
}

*/

/*

const store = createStore(noteReducer)

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})

const App = () => {
  return(
    <div>
      <ul>
        {store.getState().map(note=>
          <li key={note.id}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        )}
        </ul>
    </div>
  )
}


*/


const store = createStore(noteReducer)



const renderApp = () => {
  ReactDOM.createRoot(
    document.getElementById('root')).render(
      <Provider store={store}>
        <App />
      </Provider>
    );
} 

renderApp()
store.subscribe(renderApp)