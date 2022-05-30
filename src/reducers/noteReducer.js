const noteReducer = (state = [], action) => {
    if(action.type === 'NEW_NOTE') {
      //state.push(action.data) this is not allowed as it directly changes state
      state.concat(action.data)
      return state
    }
    if(action.type === 'TOGGLE_IMPORTANCE'){
     
      state.forEach(d => d.id === action.data.id? () => {d.important = !d.important}:d)
    }
  
    return state
  }

  export default noteReducer