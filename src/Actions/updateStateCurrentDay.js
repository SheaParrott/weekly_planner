export const CURRENT_DAY = 'day: updateCurrentDay'

export function updateCurrentDay(currentDay) {
  return {
    type: CURRENT_DAY,
    payload: {
      day: currentDay
    }
  }
}
