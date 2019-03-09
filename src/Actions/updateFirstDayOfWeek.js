export const FIRST_DAY_OF_WEEK = 'firstDayOfWeek'

// will work on better  name later
// this takes the chosen day and finds the first day of the week
// so we can get the week generated and add to state.
function getSunday(d) {
  var day = d.getDay(),
    diff = d.getDate() - day
  return new Date(d.setDate(diff))
}

export function updateFirstDayOfWeek(currentDay) {
  return {
    type: FIRST_DAY_OF_WEEK,
    payload: {
      firstDayOfWeek: getSunday(currentDay)
    }
  }
}
