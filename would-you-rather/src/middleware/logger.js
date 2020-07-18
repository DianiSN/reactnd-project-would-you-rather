const logger = (store) => (next) => (action) => {
  //next is the dispatch function sent from our actions
  console.group(action.type)
    console.log('The action: ', action)
    const returnValue = next(action)
    console.log('The new state: ', store.getState())
  console.groupEnd()
  return returnValue
}

export default logger
