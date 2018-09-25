import { ADD_NOTE, REMOVE_NOTE } from './types'

export const addNote = (data) => {
    return {
        type: ADD_NOTE,
        data
    }
}

export const removeNote = (id) => {
    return {
        type: REMOVE_NOTE,
        id
    }
}