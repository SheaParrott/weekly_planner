export const FIRST_DAY_OF_WEEK = 'firstDayOfWeek'

// will work on better  name later
// this takes the chosen day and finds the first day of the week
// so we can get the week generated and add to state.

export function updateFirstDayOfWeek(currentDay) {
  return {
    type: FIRST_DAY_OF_WEEK,
    payload: {
      firstDayOfWeek: currentDay
    }
  }
}
