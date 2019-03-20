function loginReducers(state={},action:any) {
  switch (action.type) {
    case "USER_LOGIN":
      console.log(action.promise.payload)
      return state;
    default:
      return state;
  }
}
export default loginReducers;