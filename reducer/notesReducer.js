export default (state = {notes: []}, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                notes: [...state.notes, action.note]
            }
        case 'REMOVE_NOTE':
            
            return {
                notes: [...state.notes]
            }
    }
}