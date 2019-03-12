export const DAYS_SHOWN = 'firstDayOfWeek'
export const CLEAR_SHOWN = 'cleae'

function week(firstDayOfWeek) {
  let daysShown = []

  for (let i = 0; i < 7; i++) {
    let newDate = new Date(
      firstDayOfWeek.getFullYear(),
      parseInt(firstDayOfWeek.getMonth()),
      parseInt(firstDayOfWeek.getDate()) + i
    )
    daysShown.push(newDate)
  }
  return daysShown
}

export function updateFirstWeek(currentDay) {
  return {
    type: DAYS_SHOWN,
    payload: {
      daysShown: week(currentDay)
    }
  }
}
