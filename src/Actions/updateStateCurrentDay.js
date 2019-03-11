export const CURRENT_DAY = 'currentDay: updateCurrentDay'

export function updateCurrentDay(currentDay) {
  return {
    type: CURRENT_DAY,
    payload: {
      day: currentDay
    }
  }
}
