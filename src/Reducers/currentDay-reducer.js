import { CURRENT_DAY } from '../Actions/updateStateCurrentDay'

// will work on better  name later
// this takes the chosen day and finds the first day of the week
// so we can get the week generated and add to state.
export default function currentDayReducer(state = '', { type, payload }) {
  switch (type) {
    case CURRENT_DAY:
      return payload
    default:
      return state
  }
}
