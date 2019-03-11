import { CURRENT_DAY } from '../Actions/updateStateCurrentDay'
import { DAYS_SHOWN } from '../Actions/updateFirstDayOfWeek'
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
      return Object.assign({}, state, action.payload)
    case DAYS_SHOWN:
      // console.log(action.payload)
      // console.log([
      //   ...state.daysShown.slice(0, 0).concat(action.payload.daysShown)
      // ])
      // // console.log(
      // //   'dS Reducer: ' +
      // //     [...state.slice(0, action.daysShown).concat(action.payload.daysShown)]
      // // )
      // let updated = [
      //   ...state.daysShown.slice(0, 0).concat([action.payload.daysShown])
      // ]

      return {
        ...state,
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
        return item !== action.id // return all the items not matching the action.id
      })
      delete state.byHash[action.id] // delete the hash associated with the action.id
      return {
        byId: prunedIds,
        byHash: state.byHash
      }
    }
    default:
      return state
  }
}
