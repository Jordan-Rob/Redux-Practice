import { toggleImportanceOf } from "../reducers/noteReducer"
import { useDispatch, useSelector } from "react-redux"

const Note = ({note, toggle}) => {

    return (
        <li
        onClick={() => toggle(note.id)}
      >
        {note.content} <strong>{note.important ? 'important' : ''}</strong>
      </li>
    )
}



const Notes = () => {

  const dispatch = useDispatch()
  const notes = useSelector( state => state)

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id))
  }

  return (
    <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} toggle={toggleImportance} />
        )}
    </ul>
  )
}

export default Notes