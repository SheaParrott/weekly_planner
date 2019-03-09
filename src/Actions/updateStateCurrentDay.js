export const CURRENT_DAY = 'currentDay: updateCurrentDay'

// will work on better  name later
// this takes the chosen day and finds the first day of the week
// so we can get the week generated and add to state.
function getSunday(d) {
  var day = d.getDay(),
    diff = d.getDate() - day
  return new Date(d.setDate(diff))
}

export function updateCurrentDay(currentDay) {
  return {
    type: CURRENT_DAY,
    payload: getSunday(currentDay)
  }
}
