import { createStore } from 'redux'
import reducer from './reducer/notesReducer'

export default function configureStore() {
    return createStore(reducer)
}

