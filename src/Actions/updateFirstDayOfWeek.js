export const FIRST_DAY_OF_WEEK = 'firstDayOfWeek'

let daysShown = []

function week(firstDayOfWeek) {
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
