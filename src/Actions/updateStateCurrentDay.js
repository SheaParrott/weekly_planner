export const CURRENT_DAY = 'currentDay: updateCurrentDay'
export const DAYS_SHOWN = 'firstDayOfWeek'

function getSunday(d) {
  var day = d.getDay(),
    diff = d.getDate() - day
  return new Date(d.setDate(diff))
}

function week(day) {
  let firstDayOfWeek = getSunday(day)
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

// combined updateCurrentDay and updateWeekShown
export function updateCurrentDay(currentDay) {
  return {
    type: CURRENT_DAY,
    payload: {
      day: currentDay,
      daysShown: week(currentDay)
    }
  }
}

export function updateFirstWeek(currentDay) {
  return {
    type: DAYS_SHOWN,
    payload: {
      daysShown: week(currentDay)
    }
  }
}
