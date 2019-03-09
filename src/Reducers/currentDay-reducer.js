import { CURRENT_DAY } from '../Actions/updateStateCurrentDay'

export default function currentWeek(state = '', { type, payload }) {
  switch (type) {
    case 'day':
      // here if the date is a utc date
      // return a payload object with each day of the week objects
      return payload
    default:
      return state
  }
}
