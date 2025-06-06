const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("ACTION", action.type);
  console.log("PREV_STATE", store.getState());
  const res = next(action);
  console.log("NEXT_STATE", store.getState());
  console.groupEnd();
  return res;
};

export default logger;
