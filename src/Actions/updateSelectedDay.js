export const SELECTED_DAY = 'selectedDay'
export const SELECTED_MONTH = 'selectedMonth'
export const SELECTED_YEAR = 'selectedYear'
export const SELECTED_DAYS_SHOWN = 'selectedDaysShown'

// will work on better  name later
// this takes the chosen day and finds the first day of the week
// so we can get the week generated and add to state.

export function updateSelectedDay(selected) {
  return {
    type: SELECTED_DAY,
    payload: {
      day: selected
    }
  }
}
export function updateSelectedMonth(selected) {
  return {
    type: SELECTED_MONTH,
    payload: {
      day: selected
    }
  }
}
export function updateSelectedYear(selected) {
  return {
    type: SELECTED_YEAR,
    payload: {
      day: selected
    }
  }
}
export function updateSelectedDaysShown(selected) {
  return {
    type: SELECTED_DAYS_SHOWN,
    payload: {
      day: selected
    }
  }
}
