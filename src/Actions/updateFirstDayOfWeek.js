export const DAYS_SHOWN = 'firstDayOfWeek'
export const CLEAR_SHOWN = 'cleae'

function week(firstDayOfWeek) {
  let daysShown = []
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
  return daysShown
}

export function updateFirstDayOfWeek(currentDay) {
  return {
    type: DAYS_SHOWN,
    payload: {
      daysShown: week(currentDay)
    }
  }
}
