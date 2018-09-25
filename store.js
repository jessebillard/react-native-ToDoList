import { createStore } from 'redux'
import { reducer } from './reducer/notesReducer'

export function configureStore() {
    return createStore(reducer)
}

export const store = configureStore()