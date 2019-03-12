export const ADD_EVENT = 'add'
export const UPDATE_EVENT = 'update'
export const REMOVE_EVENT = 'remove'

let id = 0
export function addEvent(event) {
  id += 1
  return {
    type: ADD_EVENT,
    id: id,
    payload: {
      id: id,
      content: {
        date: `${event[0]}`,
        StartTime: `${event[1]}`,
        EndTime: `${event[2]}`,
        body: `${event[3]}`
      }
    }
  }
}
export function updateEvent(event) {
  return {
    type: UPDATE_EVENT,
    id: event[0],
    payload: {
      id: event[0],
      content: {
        date: `${event[1]}`,
        StartTime: `${event[2]}`,
        EndTime: `${event[3]}`,
        body: `${event[4]}`
      }
    }
  }
}
export function removeEvent(event) {
  return {
    type: REMOVE_EVENT,
    id: event
  }
}
