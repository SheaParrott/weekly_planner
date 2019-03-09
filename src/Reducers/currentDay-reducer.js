import { CURRENT_DAY } from '../Actions/updateStateCurrentDay'
import { FIRST_DAY_OF_WEEK } from '../Actions/updateFirstDayOfWeek'
import {
  SELECTED_DAY,
  SELECTED_MONTH,
  SELECTED_YEAR,
  SELECTED_DAYS_SHOWN
} from '../Actions/updateSelectedDay'

const initialState = {
  day: CURRENT_DAY
}

export default function currentDayReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case CURRENT_DAY:
      return Object.assign({}, state, payload)
    case FIRST_DAY_OF_WEEK:
      return Object.assign({}, state, payload)
    default:
      return state
  }
}
