import { CURRENT_DAY } from '../Actions/updateStateCurrentDay'

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
    default:
      return state
  }
}
