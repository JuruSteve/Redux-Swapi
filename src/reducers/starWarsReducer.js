import { FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from '../actions'

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isFetching: false,
  error: ''
}

export const charsReducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: [
          ...state.characters,
          action.payload
        ],
        error: '',
        isFetching: false
      }

    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state
  }
}
