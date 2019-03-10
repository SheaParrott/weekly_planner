export const FIRST_DAY_OF_WEEK = 'firstDayOfWeek'

// will work on better  name later
// this takes the chosen day and finds the first day of the week
// so we can get the week generated and add to state.

// [] this is working but after the first change in the selected week.
// it is concating the arrays. I want it to drop the array. then
// reset the state
let daysShown = []

function week(firstDayOfWeek) {
  console.log(firstDayOfWeek)
  for (let i = 0; i < 7; i++) {
    let date = firstDayOfWeek.toISOString().split('')
    let day = date[8] + date[9]
    day = parseInt(day) + i
    let newDate = new Date(
      date.slice(0, 4).join(''),
      date.slice(5, 7).join('') - 1,
      day
    )
    daysShown.push(newDate)
  }
}

export function updateFirstDayOfWeek(currentDay) {
  week(currentDay)
  return {
    type: FIRST_DAY_OF_WEEK,
    payload: {
      daysShown: daysShown
    }
  }
}
