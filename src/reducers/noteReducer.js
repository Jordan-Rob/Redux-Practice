const noteReducer = (state = [], action) => {
    /*
    if(action.type === 'NEW_NOTE') {
      //state.push(action.data) this is not allowed as it directly changes state
      state.concat(action.data)
      return state
    }
    */

    switch(action.type){
      case 'NEW_NOTE':
        return state.concat(action.data)
      case 'TOGGLE_IMPORTANCE':{
        const id = action.data.id
        const noteToChange = state.find(n => n.id === id)
        const changedNote = {
            ...noteToChange,
            important: !noteToChange.imprtant
        }
        return state.map(note => 
          note.id !== id? note : changedNote
        )
      }
      default:
        return state
    }
  }

  export default noteReducer