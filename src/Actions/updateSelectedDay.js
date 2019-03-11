export const SELECTED_DAY = 'selectedDay'
export const SELECTED_MONTH = 'selectedMonth'
export const SELECTED_YEAR = 'selectedYear'

export function updateSelectedDay(selected) {
  return {
    type: SELECTED_DAY,
    payload: {
      dayChosen: selected
    }
  }
}
export function updateSelectedMonth(selected) {
  return {
    type: SELECTED_MONTH,
    payload: {
      monthChosen: selected
    }
  }
}
export function updateSelectedYear(selected) {
  return {
    type: SELECTED_YEAR,
    payload: {
      yearChosen: selected
    }
  }
}
