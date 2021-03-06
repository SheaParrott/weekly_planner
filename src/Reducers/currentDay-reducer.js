import { CURRENT_DAY } from '../Actions/updateStateCurrentDay'
import {
  SELECTED_DAY,
  SELECTED_MONTH,
  SELECTED_YEAR
} from '../Actions/updateSelectedDay'

import {
  ADD_EVENT,
  UPDATE_EVENT,
  REMOVE_EVENT
} from '../Actions/events-actions'

const initialState = {
  day: CURRENT_DAY,
  daysShown: []
}

export default function currentDayReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_DAY:
      return {
        ...state,
        day: action.payload.day,
        daysShown: action.payload.daysShown
      }
    case SELECTED_DAY:
      return Object.assign({}, state, action.payload)
    case SELECTED_YEAR:
      return Object.assign({}, state, action.payload)
    case SELECTED_MONTH:
      return Object.assign({}, state, action.payload)
    case ADD_EVENT: {
      return Object.assign({}, state, {
        byId: [...state.byId, action.id],
        byHash: {
          ...state.byHash,
          [action.id]: action.payload
        }
      })
    }
    case UPDATE_EVENT: {
      state.byHash[action.id] = {
        ...state.byHash[action.id],
        ...action.payload
      }
      return {
        ...state
      }
    }
    case REMOVE_EVENT: {
      const prunedIds = state.byId.filter(item => {
        return item !== action.id
      })
      delete state.byHash[action.id]
      return { ...state, byId: prunedIds, byHash: state.byHash }
    }
    default:
      return state
  }
}
