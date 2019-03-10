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
        title: `${event[0]}`,
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
    id: '2',
    payload: { content: { title: 'item 2 updated' } }
  }
}
export function removeEvent(event) {
  return {
    type: REMOVE_EVENT,
    id: '4'
  }
}
